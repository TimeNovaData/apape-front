import GLOBAL from 'utils/GLOBAL'

//
const { URLSearch } = GLOBAL

export default function useUrlParams() {
  const { pathname } = window.location

  function hasSearchParam(param) {
    return URLSearch.has(param)
  }

  function getSearchParam(param) {
    return URLSearch.get(param)
  }

  function setSearchParam(key, value) {
    URLSearch.set(key, value)
    updateSearchParams()
  }

  function deleteSearchParam(key) {
    URLSearch.delete(key)
    updateSearchParams()
  }

  function deleteAllSearchParams() {
    for (const [key, value] of new URLSearchParams(
      window.location.search
    ).entries()) {
      URLSearch.delete(key)
    }
  }

  function updateSearchParams() {
    const newPath = `${pathname}?${URLSearch.toString()}`

    history.pushState(null, '', newPath)
  }

  return {
    hasSearchParam,
    getSearchParam,
    setSearchParam,
    deleteSearchParam,
    deleteAllSearchParams,
    updateSearchParams,
  }
}
