export function UseResetRouter() {
  const windowReload = function () {
    window.location.reload()
  }
  setTimeout(windowReload, 2000)
}
