import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4652fe5e = () => interopDefault(import('..\\pages\\belial.vue' /* webpackChunkName: "pages/belial" */))
const _705831b1 = () => interopDefault(import('..\\pages\\bolverk.vue' /* webpackChunkName: "pages/bolverk" */))
const _5e8f7c71 = () => interopDefault(import('..\\pages\\camilla.vue' /* webpackChunkName: "pages/camilla" */))
const _ddfe819a = () => interopDefault(import('..\\pages\\chow.vue' /* webpackChunkName: "pages/chow" */))
const _cc103c0e = () => interopDefault(import('..\\pages\\diana.vue' /* webpackChunkName: "pages/diana" */))
const _4d810b76 = () => interopDefault(import('..\\pages\\elsharion.vue' /* webpackChunkName: "pages/elsharion" */))
const _50885378 = () => interopDefault(import('..\\pages\\fengyan.vue' /* webpackChunkName: "pages/fengyan" */))
const _8344a4a4 = () => interopDefault(import('..\\pages\\fuuki.vue' /* webpackChunkName: "pages/fuuki" */))
const _654f7eee = () => interopDefault(import('..\\pages\\giou.vue' /* webpackChunkName: "pages/giou" */))
const _da0a4a2e = () => interopDefault(import('..\\pages\\haegang.vue' /* webpackChunkName: "pages/haegang" */))
const _4eeb8fe2 = () => interopDefault(import('..\\pages\\helena.vue' /* webpackChunkName: "pages/helena" */))
const _5b0a4bbb = () => interopDefault(import('..\\pages\\josephine.vue' /* webpackChunkName: "pages/josephine" */))
const _15b466f2 = () => interopDefault(import('..\\pages\\juno.vue' /* webpackChunkName: "pages/juno" */))
const _5625dbda = () => interopDefault(import('..\\pages\\kaki.vue' /* webpackChunkName: "pages/kaki" */))
const _cbc0173a = () => interopDefault(import('..\\pages\\karnal.vue' /* webpackChunkName: "pages/karnal" */))
const _c1b57998 = () => interopDefault(import('..\\pages\\laika.vue' /* webpackChunkName: "pages/laika" */))
const _8b02cc40 = () => interopDefault(import('..\\pages\\leo.vue' /* webpackChunkName: "pages/leo" */))
const _70a5b286 = () => interopDefault(import('..\\pages\\meihouwang.vue' /* webpackChunkName: "pages/meihouwang" */))
const _79f8a144 = () => interopDefault(import('..\\pages\\molong.vue' /* webpackChunkName: "pages/molong" */))
const _dd983e02 = () => interopDefault(import('..\\pages\\monsters.vue' /* webpackChunkName: "pages/monsters" */))
const _81be6d28 = () => interopDefault(import('..\\pages\\ophilia.vue' /* webpackChunkName: "pages/ophilia" */))
const _70f251da = () => interopDefault(import('..\\pages\\perna.vue' /* webpackChunkName: "pages/perna" */))
const _29da9622 = () => interopDefault(import('..\\pages\\praha.vue' /* webpackChunkName: "pages/praha" */))
const _72330f13 = () => interopDefault(import('..\\pages\\rakan.vue' /* webpackChunkName: "pages/rakan" */))
const _2d4e15f3 = () => interopDefault(import('..\\pages\\raki.vue' /* webpackChunkName: "pages/raki" */))
const _214bc293 = () => interopDefault(import('..\\pages\\rerune.vue' /* webpackChunkName: "pages/rerune" */))
const _9d6ddbf0 = () => interopDefault(import('..\\pages\\seara.vue' /* webpackChunkName: "pages/seara" */))
const _69e6eca2 = () => interopDefault(import('..\\pages\\suiki.vue' /* webpackChunkName: "pages/suiki" */))
const _bf64cad2 = () => interopDefault(import('..\\pages\\susano.vue' /* webpackChunkName: "pages/susano" */))
const _4db15788 = () => interopDefault(import('..\\pages\\velajuel.vue' /* webpackChunkName: "pages/velajuel" */))
const _111ab622 = () => interopDefault(import('..\\pages\\woosa.vue' /* webpackChunkName: "pages/woosa" */))
const _4bc804d2 = () => interopDefault(import('..\\pages\\xingzhe.vue' /* webpackChunkName: "pages/xingzhe" */))
const _174f1e1c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4652fe5e,
    name: "belial"
  }, {
    path: "/bolverk",
    component: _705831b1,
    name: "bolverk"
  }, {
    path: "/camilla",
    component: _5e8f7c71,
    name: "camilla"
  }, {
    path: "/chow",
    component: _ddfe819a,
    name: "chow"
  }, {
    path: "/diana",
    component: _cc103c0e,
    name: "diana"
  }, {
    path: "/elsharion",
    component: _4d810b76,
    name: "elsharion"
  }, {
    path: "/fengyan",
    component: _50885378,
    name: "fengyan"
  }, {
    path: "/fuuki",
    component: _8344a4a4,
    name: "fuuki"
  }, {
    path: "/giou",
    component: _654f7eee,
    name: "giou"
  }, {
    path: "/haegang",
    component: _da0a4a2e,
    name: "haegang"
  }, {
    path: "/helena",
    component: _4eeb8fe2,
    name: "helena"
  }, {
    path: "/josephine",
    component: _5b0a4bbb,
    name: "josephine"
  }, {
    path: "/juno",
    component: _15b466f2,
    name: "juno"
  }, {
    path: "/kaki",
    component: _5625dbda,
    name: "kaki"
  }, {
    path: "/karnal",
    component: _cbc0173a,
    name: "karnal"
  }, {
    path: "/laika",
    component: _c1b57998,
    name: "laika"
  }, {
    path: "/leo",
    component: _8b02cc40,
    name: "leo"
  }, {
    path: "/meihouwang",
    component: _70a5b286,
    name: "meihouwang"
  }, {
    path: "/molong",
    component: _79f8a144,
    name: "molong"
  }, {
    path: "/monsters",
    component: _dd983e02,
    name: "monsters"
  }, {
    path: "/ophilia",
    component: _81be6d28,
    name: "ophilia"
  }, {
    path: "/perna",
    component: _70f251da,
    name: "perna"
  }, {
    path: "/praha",
    component: _29da9622,
    name: "praha"
  }, {
    path: "/rakan",
    component: _72330f13,
    name: "rakan"
  }, {
    path: "/raki",
    component: _2d4e15f3,
    name: "raki"
  }, {
    path: "/rerune",
    component: _214bc293,
    name: "rerune"
  }, {
    path: "/seara",
    component: _9d6ddbf0,
    name: "seara"
  }, {
    path: "/suiki",
    component: _69e6eca2,
    name: "suiki"
  }, {
    path: "/susano",
    component: _bf64cad2,
    name: "susano"
  }, {
    path: "/velajuel",
    component: _4db15788,
    name: "velajuel"
  }, {
    path: "/woosa",
    component: _111ab622,
    name: "woosa"
  }, {
    path: "/xingzhe",
    component: _4bc804d2,
    name: "xingzhe"
  }, {
    path: "/",
    component: _174f1e1c,
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
