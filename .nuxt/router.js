import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a66a6910 = () => interopDefault(import('..\\pages\\belial.vue' /* webpackChunkName: "pages/belial" */))
const _c225882c = () => interopDefault(import('..\\pages\\bolverk.vue' /* webpackChunkName: "pages/bolverk" */))
const _61f4f0cc = () => interopDefault(import('..\\pages\\chow.vue' /* webpackChunkName: "pages/chow" */))
const _7f1d5db1 = () => interopDefault(import('..\\pages\\fengyan.vue' /* webpackChunkName: "pages/fengyan" */))
const _40f1f227 = () => interopDefault(import('..\\pages\\fuuki.vue' /* webpackChunkName: "pages/fuuki" */))
const _7ce035bc = () => interopDefault(import('..\\pages\\haegang.vue' /* webpackChunkName: "pages/haegang" */))
const _3885abb4 = () => interopDefault(import('..\\pages\\josephine.vue' /* webpackChunkName: "pages/josephine" */))
const _53b92f59 = () => interopDefault(import('..\\pages\\juno.vue' /* webpackChunkName: "pages/juno" */))
const _d7aab77e = () => interopDefault(import('..\\pages\\kaki.vue' /* webpackChunkName: "pages/kaki" */))
const _6a143f0a = () => interopDefault(import('..\\pages\\karnal.vue' /* webpackChunkName: "pages/karnal" */))
const _21b987ad = () => interopDefault(import('..\\pages\\laika.vue' /* webpackChunkName: "pages/laika" */))
const _301ba899 = () => interopDefault(import('..\\pages\\leo.vue' /* webpackChunkName: "pages/leo" */))
const _429651ad = () => interopDefault(import('..\\pages\\meihouwang.vue' /* webpackChunkName: "pages/meihouwang" */))
const _49ecebeb = () => interopDefault(import('..\\pages\\molong.vue' /* webpackChunkName: "pages/molong" */))
const _35401de6 = () => interopDefault(import('..\\pages\\monsters.vue' /* webpackChunkName: "pages/monsters" */))
const _249458b6 = () => interopDefault(import('..\\pages\\ophilia.vue' /* webpackChunkName: "pages/ophilia" */))
const _18f2d35a = () => interopDefault(import('..\\pages\\perna.vue' /* webpackChunkName: "pages/perna" */))
const _a7224aca = () => interopDefault(import('..\\pages\\praha.vue' /* webpackChunkName: "pages/praha" */))
const _167158e8 = () => interopDefault(import('..\\pages\\rakan.vue' /* webpackChunkName: "pages/rakan" */))
const _1d7fe58c = () => interopDefault(import('..\\pages\\rerune.vue' /* webpackChunkName: "pages/rerune" */))
const _33dd5681 = () => interopDefault(import('..\\pages\\seara.vue' /* webpackChunkName: "pages/seara" */))
const _4da0ce28 = () => interopDefault(import('..\\pages\\suiki.vue' /* webpackChunkName: "pages/suiki" */))
const _7d339123 = () => interopDefault(import('..\\pages\\velajuel.vue' /* webpackChunkName: "pages/velajuel" */))
const _7a06e968 = () => interopDefault(import('..\\pages\\woosa.vue' /* webpackChunkName: "pages/woosa" */))
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
    path: "/bolverk",
    component: _c225882c,
    name: "bolverk"
  }, {
    path: "/chow",
    component: _61f4f0cc,
    name: "chow"
  }, {
    path: "/fengyan",
    component: _7f1d5db1,
    name: "fengyan"
  }, {
    path: "/fuuki",
    component: _40f1f227,
    name: "fuuki"
  }, {
    path: "/haegang",
    component: _7ce035bc,
    name: "haegang"
  }, {
    path: "/josephine",
    component: _3885abb4,
    name: "josephine"
  }, {
    path: "/juno",
    component: _53b92f59,
    name: "juno"
  }, {
    path: "/kaki",
    component: _d7aab77e,
    name: "kaki"
  }, {
    path: "/karnal",
    component: _6a143f0a,
    name: "karnal"
  }, {
    path: "/laika",
    component: _21b987ad,
    name: "laika"
  }, {
    path: "/leo",
    component: _301ba899,
    name: "leo"
  }, {
    path: "/meihouwang",
    component: _429651ad,
    name: "meihouwang"
  }, {
    path: "/molong",
    component: _49ecebeb,
    name: "molong"
  }, {
    path: "/monsters",
    component: _35401de6,
    name: "monsters"
  }, {
    path: "/ophilia",
    component: _249458b6,
    name: "ophilia"
  }, {
    path: "/perna",
    component: _18f2d35a,
    name: "perna"
  }, {
    path: "/praha",
    component: _a7224aca,
    name: "praha"
  }, {
    path: "/rakan",
    component: _167158e8,
    name: "rakan"
  }, {
    path: "/rerune",
    component: _1d7fe58c,
    name: "rerune"
  }, {
    path: "/seara",
    component: _33dd5681,
    name: "seara"
  }, {
    path: "/suiki",
    component: _4da0ce28,
    name: "suiki"
  }, {
    path: "/velajuel",
    component: _7d339123,
    name: "velajuel"
  }, {
    path: "/woosa",
    component: _7a06e968,
    name: "woosa"
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
