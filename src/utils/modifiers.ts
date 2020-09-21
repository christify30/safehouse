export const titleFromRoute = (route: string) => {
  const title = route.substring(1).replace(/^\w/, function(chr) {
    return chr.toUpperCase()
  })
  return title
}
