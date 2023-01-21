import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a66a6910 = () => interopDefault(import('..\\pages\\belial.vue' /* webpackChunkName: "pages/belial" */))
const _3885abb4 = () => interopDefault(import('..\\pages\\josephine.vue' /* webpackChunkName: "pages/josephine" */))
const _53b92f59 = () => interopDefault(import('..\\pages\\juno.vue' /* webpackChunkName: "pages/juno" */))
const _21b987ad = () => interopDefault(import('..\\pages\\laika.vue' /* webpackChunkName: "pages/laika" */))
const _301ba899 = () => interopDefault(import('..\\pages\\leo.vue' /* webpackChunkName: "pages/leo" */))
const _49ecebeb = () => interopDefault(import('..\\pages\\molong.vue' /* webpackChunkName: "pages/molong" */))
const _35401de6 = () => interopDefault(import('..\\pages\\monsters.vue' /* webpackChunkName: "pages/monsters" */))
const _167158e8 = () => interopDefault(import('..\\pages\\rakan.vue' /* webpackChunkName: "pages/rakan" */))
const _1d7fe58c = () => interopDefault(import('..\\pages\\rerune.vue' /* webpackChunkName: "pages/rerune" */))
const _4da0ce28 = () => interopDefault(import('..\\pages\\suiki.vue' /* webpackChunkName: "pages/suiki" */))
const _08b107d0 = () => interopDefault(import('..\\pages\\xingzhe.vue' /* webpackChunkName: "pages/xingzhe" */))
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
    path: "/josephine",
    component: _3885abb4,
    name: "josephine"
  }, {
    path: "/juno",
    component: _53b92f59,
    name: "juno"
  }, {
    path: "/laika",
    component: _21b987ad,
    name: "laika"
  }, {
    path: "/leo",
    component: _301ba899,
    name: "leo"
  }, {
    path: "/molong",
    component: _49ecebeb,
    name: "molong"
  }, {
    path: "/monsters",
    component: _35401de6,
    name: "monsters"
  }, {
    path: "/rakan",
    component: _167158e8,
    name: "rakan"
  }, {
    path: "/rerune",
    component: _1d7fe58c,
    name: "rerune"
  }, {
    path: "/suiki",
    component: _4da0ce28,
    name: "suiki"
  }, {
    path: "/xingzhe",
    component: _08b107d0,
    name: "xingzhe"
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
