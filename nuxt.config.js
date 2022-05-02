import webpack from 'webpack'
import router from './router'

export default {
  server: {
    host: '0'
  },
  router,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rebirth Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#E72E51' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/default.scss',
    '~/assets/vendor/css/cubeportfolio.min.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuelidate',
    { src: '@/plugins/vue-carousel', mode: 'client' },
    { src: '@/plugins/vue-toastification.js', mode: 'client' },
    { src: '~/assets/vendor/js/jquery.cubeportfolio.min.js', mode: 'client', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/i18n',
    '@nuxtjs/recaptcha'
  ],
  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      size: 'invisible',
      hideBadge: false,
      version: 2
    }
  },
  styleResources: {
    scss: ['@/assets/sass/resources.scss']
  },
  gsap: {
    /* Module Options */
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'pt-BR',
        file: 'pt-BR.json'
      }
    ],
    defaultLocale: 'en-US',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang'
    },
    vueI18n: {
      fallbackLocale: 'en-US'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      start_url: 'https://rebirthstudio.com.br/?standalone=true',
      lang: 'en',
      description: 'Gaming & Entertainment Industry Outsourcing Studio\n' +
        'A group of friends making it happen\n' +
        'High level of quality and reliability',
      short_name: 'Rebirth Studio',
      background_color: '#262626',
      theme_color: '#E72E51'
    },
    icon: {
      source: 'static/icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  loading: '~/components/VLoading.vue'
}
