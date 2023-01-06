export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Curry's RTA Room【Summoners War】",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Here are some of the videos I post on youtube that I recommend I created this site to let you know about me not from youtube but from google search In addition to posting videos, I also provide rerune service If you are interested, please contact me through discord" },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'uUSQV_621jvohmYULQEgCFTSzPuvp1UX5DD6BgTjKUw' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;500;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-2823672209200755',
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
