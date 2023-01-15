import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a66a6910 = () => interopDefault(import('..\\pages\\belial.vue' /* webpackChunkName: "pages/belial" */))
const _49ecebeb = () => interopDefault(import('..\\pages\\molong.vue' /* webpackChunkName: "pages/molong" */))
const _35401de6 = () => interopDefault(import('..\\pages\\monsters.vue' /* webpackChunkName: "pages/monsters" */))
const _1d7fe58c = () => interopDefault(import('..\\pages\\rerune.vue' /* webpackChunkName: "pages/rerune" */))
const _cc393ad6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/belial",
    component: _a66a6910,
    name: "belial"
  }, {
    path: "/molong",
    component: _49ecebeb,
    name: "molong"
  }, {
    path: "/monsters",
    component: _35401de6,
    name: "monsters"
  }, {
    path: "/rerune",
    component: _1d7fe58c,
    name: "rerune"
  }, {
    path: "/",
    component: _cc393ad6,
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
