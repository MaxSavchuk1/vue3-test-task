import type { RouteLocationNormalized } from 'vue-router'

export default async function loadLayoutMiddleware(
  route: RouteLocationNormalized
) {
  try {
    const layout = route.meta.layout
    if (layout) {
      // if meta.layout exists then use given layout
      const layoutComponent = await import(`@/layouts/${layout}.vue`)
      route.meta.layoutComponent = layoutComponent.default
    } else {
      // else use default layout
      const layoutComponent = await import(`@/layouts/DefaultLayout.vue`)
      route.meta.layoutComponent = layoutComponent.default
    }
  } catch (e) {
    console.error('Something strange occured: ', e)
  }
}
