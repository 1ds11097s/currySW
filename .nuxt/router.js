import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a47a202a = () => interopDefault(import('..\\pages\\molong.vue' /* webpackChunkName: "pages/molong" */))
const _08b5bc34 = () => interopDefault(import('..\\pages\\monsters.vue' /* webpackChunkName: "pages/monsters" */))
const _5516113a = () => interopDefault(import('..\\pages\\rerune.vue' /* webpackChunkName: "pages/rerune" */))
const _213cde95 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/molong",
    component: _a47a202a,
    name: "molong"
  }, {
    path: "/monsters",
    component: _08b5bc34,
    name: "monsters"
  }, {
    path: "/rerune",
    component: _5516113a,
    name: "rerune"
  }, {
    path: "/",
    component: _213cde95,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
