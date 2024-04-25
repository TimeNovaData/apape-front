import { computed, nextTick, onMounted, ref } from 'vue'
import { deepUnref } from 'vue-deepunref'
import { onBeforeRouteLeave } from 'vue-router'
import GLOBAL from 'utils/GLOBAL'
import useUrlParams from './useUrlParams'

export default function useFilters(filtrosModel, opts) {
  const { generateStringFilterFromObject } = GLOBAL

  const options = {
    applyOnInit: false,
    urlsParams: false,
    ...opts,
  }

  const { setSearchParam, deleteAllSearchParams, updateSearchParams } =
    useUrlParams()

  const filtros = ref(filtrosModel)
  const filtrosAplicados = ref(deepUnref(filtrosModel))
  /**
   * Gera um objeto {key, value},  de acordo com chave do objeto e valor da model
   * util para enviar somente key:value na query
   * dentro do objeto se contiver uma key, ele ira acessar a propriedade da model pela key
   * @param {object} filtros - ex:{ agrupar_periodo: { id: 1, name: 'Agrupando por Periodo', model: null, key: 'name'  } }
   * @returns {object} {key, value}
   */
  function generateFilterObject(filtros) {
    const filtrosArr = Object.entries(deepUnref(filtros))
    return filtrosArr.reduce((acc, [name, value]) => {
      const key = value?.key
      const model = key ? value.model[key] : value.model

      if (model) acc[name] = GLOBAL.transformEmptyToNull(model)
      return acc
    }, {})
  }

  /**
   * parecido com a de gerar filtro
   * gera um objeto de badge de acordo com a prop name do objeto e o value
   * @param {object} filtros  - ex:{ agrupar_periodo: { id: 1, name: 'Agrupando por Periodo', model: null, key: 'name'  } }
   * @returns {object} {name:{name, id}}
   */
  function generateBadgeObject(filtros) {
    const filtrosArr = Object.entries(deepUnref(filtros))

    return filtrosArr.reduce((acc, [_, value]) => {
      const key = value?.key
      let model = key ? value.model[key] : value.model
      const format = value.format
      if (format === 'date' && model) model = GLOBAL.FData(model)

      const data = GLOBAL.isEmptyData(model)

      const modelClean = () => {
        if (data?.isArray) {
          return model.map((i) => i?.label)?.join(', ')
        } else if (data?.isObject) {
          return Object.keys(model).join(', ')
        } else {
          return model
        }
      }

      if (!data.isEmpty) {
        acc[value.name] = { name: modelClean(), id: value.id }
      }
      return acc
    }, {})
  }

  /* Query */
  const query = computed(() => generateQuery(filtros))

  /* Gera a query em string */
  function generateQuery(filtros) {
    const obj = generateFilterObject(filtros)
    return generateStringFilterFromObject(obj)
  }

  /* Qnt */
  const qnt = ref(0)
  /* Seta a quantidade de filtros aplicados */
  function setQnt() {
    const obj = generateFilterObject(filtros)
    const _qnt = Object.entries(obj).filter(([key, value]) => {
      const valid = value
      return valid
    })
    // console.log({ _qnt, filtros: filtros.value, obj })
    qnt.value = _qnt.length
  }

  /* Badges */
  const badges = ref([])

  /* seta e Formata as badges para o formato desejado */
  function setBadges() {
    badges.value = Object.entries(generateBadgeObject(filtros.value)).map(
      ([key, value]) => {
        return {
          name: `${key}${
            value.name.toString() !== 'true' ? `: ${value.name}` : ''
          }`,
          id: value.id,
        }
      }
    )
    filtrosAplicados.value = deepUnref(filtros.value)
  }

  function isEmpty(filtros) {
    return Boolean(Object.keys(generateFilterObject(filtros)).length)
  }

  async function onRemove(callback) {
    filtros.value = deepUnref(filtrosModel)
    await nextTick()
    setBadges()
    setQnt()
    deleteAllSearchParams()
    updateSearchParams()
    setUrlParams()
    callback()
    return deepUnref(filtrosModel)
  }

  function onDateChange({ toEn, fromEn }) {
    filtros.value.from.model = fromEn
    filtros.value.to.model = toEn
  }

  function setUrlParams() {
    // const obj = generateFilterObject(filtros.value)
    // deleteAllSearchParams() // limpa params url
    // Object.entries(obj).forEach(([key, value]) => {
    //   setSearchParam(key, value) // seta params url
    // })
  }

  /* seta os filtros quando inicia
   * de acordo com as url params
   */
  onMounted(async () => {
    if (!options.applyOnInit) return
    // aqui crio um novo objeto searchparams por precisao
    const URLSearch = new URLSearchParams(window.location.search)

    for (const [key, value] of URLSearch.entries()) {
      const val = value === 'true' || value === 'false' ? Boolean(value) : value
      const prop = filtros.value[key]
      if (prop) {
        filtros.value[key].model = val
        console.log('filtro aplicado:', { [prop]: val })
      }
    }
  })

  function updateFilters(state) {
    filtros.value = { ...filtros.value, ...state }
    setQnt()
    setBadges()
    setUrlParams()
  }

  onBeforeRouteLeave(() => {
    if (!options.urlsParams) return
    deleteAllSearchParams()
    updateSearchParams()
  })

  /* 
  
  
  FIX  removeFilter
  
  */
  function removeFilter(id) {
    const array = Object.entries(filtros.value).map(([key, value]) => {
      if (value.id === id) {
        value.model = filtrosModel[key]?.model
      }

      return { [key]: value }
    })

    const obj = array.reduce((acc, i) => {
      const key = Object.keys(i).at()
      const value = Object.values(i).at()
      acc[key] = value

      return acc
    }, {})

    updateFilters(obj)
  }

  return {
    filtros,
    qnt,
    setQnt,
    badges,
    setBadges,
    query,
    isEmpty,
    onDateChange,
    onRemove,
    filtrosAplicados,
    setUrlParams,
    updateSearchParams,
    updateFilters,
    removeFilter,
  }
}
