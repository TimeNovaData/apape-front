/**
 * @typedef {{ label: String, field: String }[]} Scheme
 */
import { read, utils, writeFile } from 'xlsx';

/** @returns {Promise<File | undefined></File>} */

export function readSheet() {
  const input = document.createElement('input')
  input.type = 'file'
  input.setAttribute("multiple", false);
  input.setAttribute("accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  return new Promise(resolve => {
    input.addEventListener('input', async (evt) => {
      if (input.files.length) {
        const file = input.files[0]
        resolve(file)
      }
      resolve()
    })
    input.addEventListener('cancel', async (evt) => {
      resolve()
    })
    input.click()
  })
}

export async function exportSheet(/** @type {any[]} */ data, /** @type {Scheme} */ scheme, name) {

  const rows = []
  const labels = scheme.map(item => item.label)
  const fields = scheme.map(item => item.field)
  for (const medico of data) {
    const row = fields.map(field => medico[field])
    rows.push(row)
  } 
  const worksheet = utils.json_to_sheet(rows, { skipHeader: true, origin: 'A2' });
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "planilha");
  utils.sheet_add_aoa(worksheet, [labels], { origin: "A1" });
  const ts = new Date().toISOString().substring(0, 16).replace(/\D/gi, '_')
  const _name = name || `medicos_${ts}.xlsx`
  writeFile(workbook, _name, { compression: true })
}

export async function importSheet(/** @type {File} */file, /** @type {Scheme} */scheme) {
  const buffer = await file.arrayBuffer()
  const workbook = read(buffer)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  /** @type {[String[], ...String[][]]} */
  const [headers, ...rows] = utils.sheet_to_json(worksheet, { header: 1 })
  const labels = scheme.map(item => item.label)
  /** @type {Record<String, String>} */
  const fields = scheme.reduce((map, item) => {
    map[item.label] = item.field
    return map
  }, {})

  function serialize(/** @type {String[]} */array) {
    return JSON.stringify(Array.from(array).sort())
  }
  if (serialize(labels) !== serialize(headers)) {
    return []
  }
  /** @type {any[]} */
  const records = rows.map(row => {
    return row.reduce((obj, cell, index) => {
      const label = headers[index]
      const field = fields[label]
      obj[field] = cell
      return obj
    }, {})
  })
  return records
}
