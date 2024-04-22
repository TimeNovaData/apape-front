import { LoadingBar } from 'quasar'
import { _url_method } from './axios'

function logURLS(url = '') {
  const index = url.indexOf('/api/') + 5
  const method = _url_method.value
  const key = `${method?.toUpperCase()} ` + url.slice(index)

  const color = {
    patch: '_silver',
    get: '_green',
    post: '_yellow',
    delete: '_red',
  }

  const type = color[method] ? color[method] : '_logsimple'

  if (!type || !method || !key) {
    console.log(url)
    return
  }

  window[type](key) // window._green
}

LoadingBar.setDefaults({
  // return a Boolean which has the meaning of
  // "should this URL trigger LoadingBar?"
  size: '6px',
  hijackFilter(url) {
    logURLS(url)
    const list = [/no_loading/].filter((i) => i.test(url))
    const verif = Boolean(list.length)
    const deveAcionar = !verif
    return deveAcionar
  },
})
