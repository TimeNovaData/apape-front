import { colors, date, exportFile, is } from 'quasar'
import { deepUnref } from 'vue-deepunref'
import { NotifyError } from 'boot/Notify'
import { unref } from 'vue'
import gsap from 'gsap/dist/gsap'

const GLOBAL = {
  /** Search Query  */
  URLSearch: new URLSearchParams(window.location.search),

  /**
   * define um intervalo entre cada execucao e limpa o intervalo anterior
   * @param {number} time - duration em ms
   * @param {function} fn - funcao a ser executada
   * @param timeout - variavel onde sera armazenado o timer
   * @return - function que recebe args, para executar a fn
   */
  debounce: (time, fn, timeout) => {
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn(...args)
      }, time)
    }
  },

  /**
   * faz o scroll funcionar no drag
   * @param {ref} removeEvents - to cancel events
   */
  enableDragScroll: (removeEvents) => {
    /**
     * @param {event} e - Pass the event object
     */
    return (e) => {
      const domElement = e.currentTarget
      const offset = { x: 0, y: 0 }
      const startPos = { x: 0, y: 0 }

      const onMouseMove = (e) => {
        // console.log('onMouseMove')
        if (removeEvents.value) {
          document.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
        }

        domElement.scrollLeft = offset.x + startPos.x - e.clientX
        domElement.scrollTop = offset.y + startPos.y - e.clientY
        return false
      }

      const onMouseUp = (e) => {
        // console.log('onMouseUp')
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)

        return false
      }

      const onMouseDown = (e) => {
        // console.log('onMouseDown')
        removeEvents.value = false

        startPos.x = e.clientX
        startPos.y = e.clientY
        offset.x = domElement.scrollLeft
        offset.y = domElement.scrollTop

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)

        return false
      }

      domElement.addEventListener('mousedown', onMouseDown)
    }
  },

  /**
   * gera um array de acordo com o modelo passado
   * @param {number} totalElementos  newv
   * @param {function} modelo - funcao que recebe o index e o total = modelo(i, length)
   * @return {array} array prrenchido com o modelo
   */
  generateRange: (totalElementos, modelo /* cb  return obj template */) => {
    return Array.from({ length: totalElementos }, (_, i) =>
      modelo(i, totalElementos)
    )
  },

  /**
   * The compareAndReturnDiff function takes two objects as arguments
   * and returns a new object containing only the keys that have different
   * values between the two objects.
   * @param {object} oldv  old value
   * @param {object} newv  newv
   * @return {object}  An object with the keys that have changed
   */
  compareAndReturnDiff: (oldv = {}, newv = {}) => {
    const modificado = {}
    if (!oldv || !newv) {
      return null
    }
    Object.entries(unref(newv)).forEach(([key, v]) => {
      const a = oldv[key]
      const b = newv[key]
      if (is.deepEqual(a, b)) return null
      else modificado[key] = v
    })
    return modificado
  },

  /**
   * The ordenateKey function is a sort callback
   * that compares two objects by the value of their key property.
   * @param {string} key - Sort the array by a specific key
   * @return sort callback
   */
  ordenateByKey: (key) => (a, b /* sort cb */) => {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  },

  /**
   * @param {string} hex - hexadecimal
   * @return {string} ex: '255, 255, 255'
   */
  returnRGB: (hex) => (hex ? `${Object.values(colors.hexToRgb(hex))}` : ''),

  FData(value, format = 'DD/MM/YYYY') {
    if (date.isValid(value)) {
      const dataFormatted = value.length > 10 ? value : value.replace('-', '/')
      const data = date.formatDate(dataFormatted, format, {
        days: [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado',
        ],
      })
      return data
    } else {
      return '-'
    }
  },

  FDataAndTime(value) {
    if (date.isValid(value)) {
      const dataFormatted = value.length > 10 ? value : value.replace('-', '/')
      const data = date.formatDate(dataFormatted, 'DD MMMM')
      const time = date.formatDate(dataFormatted, 'HH[h] mm[m]')
      return `${data} às ${time}`
    } else {
      return '-'
    }
  },

  FDateBRtoEU(value) {
    if (value) {
      const dia = value.slice(0, 2)
      const mes = value.slice(3, 5)
      const ano = value.slice(6, 10)
      return `${ano}-${mes}-${dia}`
    } else {
      return '-'
    }
  },

  FTime(value /* 00:00:00 */) {
    if (!value) return '-'
    const len8 = value.length === 8

    const hora = value?.slice(0, len8 ? 2 : 3)
    const minutos = value?.slice(len8 ? 3 : 4, len8 ? 5 : 6)

    const data = date.buildDate({ year: 2022, hours: hora, minutes: minutos })

    if (date.isValid(data)) {
      return `${hora}h ${minutos}m`
      // return date.formatDate(data, 'HH[h] mm[m]')
    } else {
      return '-'
    }
  },

  FTimeLong(value) {
    const timeReplaced = value.replace('h ', ':').replace('m', ':00')
    return timeReplaced
  },

  /**
   * Add zeros a esquerda
   * @param {number} num
   * @param {number} count - numero de zeros
   */
  zeroPad(num, count = 2) {
    return num?.toString().padStart(count, '0')
  },

  /**
   * Add zeros a esquerda
   * @param {number} seconds
   * @param {boolean} mostrarSeconds
   * @return `${hours}h ${minutes}m ${showSeconds}`
   */
  secondsToHours(seconds, mostrarSeconds = true) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)
    const seconds_ = seconds - hours * 3600 - minutes * 60
    const showSeconds = mostrarSeconds ? `${Math.round(seconds_)}s` : ''
    return `${hours}h ${minutes}m ${showSeconds}`
  },

  wrapCsvValue(val, formatFn, row) {
    let formatted = formatFn !== void 0 ? formatFn(val, row) : val

    formatted =
      formatted === void 0 || formatted === null ? '' : String(formatted)

    formatted = formatted.split('"').join('""')
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')

    return `"${formatted}"`
  },

  exportTable(columns, rows) {
    // naive encoding to csv format
    const content = [columns.map((col) => GLOBAL.wrapCsvValue(col.label))]
      .concat(
        deepUnref(rows).map((row) =>
          columns
            .map((col) =>
              GLOBAL.wrapCsvValue(
                typeof col.field === 'function'
                  ? col.field(row)
                  : row[col.field === void 0 ? col.name : col.field],
                col.format,
                row
              )
            )
            .join(',')
        )
      )
      .join('\r\n')

    const status = exportFile('table-export.csv', content, 'text/csv')

    if (status !== true) {
      NotifyError('Erro ao baixar')
    }
  },

  async blobDownloadFile(url, fileName) {
    const image = await fetch(url)
    const imageBlob = await image.blob()
    const imageURL = URL.createObjectURL(imageBlob)

    const anchor = document.createElement('a')
    anchor.href = imageURL
    anchor.download = fileName

    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    URL.revokeObjectURL(imageURL)
  },

  /**
   * @summary Por enquanto é só um wrapper pra usar no v-html
   * @todo fazer a logica de sanitizacao depois
   */
  sanitizeHTML(v) {
    // const vNoStyle = v.replaceAll(/\s\w+="[^"]*"/g, '')
    return v
  },

  /**
   * @summary Recebe um minimo e um maximo e retorna um rando entre eles
   * @param {number} min minimo
   * @param {number} min maximo
   * @return {number} random number
   */
  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  fMoney(value) {
    const valor = value || 0
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor)
  },
  /**
   *
   * @param {Obect} obj - objeto de filtros
   * @param {Bollean} queryPrefix  - Se deve incluir ?q= no começo da query
   * @returns
   */

  generateStringFilterFromObject(obj, queryPrefix = true) {
    const filtros = Object.entries(obj).map(([key, value]) => {
      return Array.isArray(value)
        ? `&${key?.trim()}=${value.map((obj) => obj.value).join(',')}`
        : `&${key?.trim()}=${value || ''}`
    })

    return queryPrefix ? `?q=${filtros.join('')}` : filtros.join('')
  },
}

export default GLOBAL
