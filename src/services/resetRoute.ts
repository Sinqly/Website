export function useResetRouter() {
  const windowReload = function () {
    window.location.reload()
  }
  setTimeout(windowReload, 2500)
}
