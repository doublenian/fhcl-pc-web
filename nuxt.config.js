const publicPath = '/'
let nuxtConfig = {
  mode: 'universal',
  telemetry: false,
  // server: {
  //   // port: process.env.APP_ENV ? 3000 : 9002, // default: 3000
  //   // host: '0.0.0.0' // default: localhost
  // },
  /*
   ** Headers of the page
   */
  head: {
    title: '富乐医疗中国官网 | 便捷、优质且价格合理的医疗健康服务' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '富乐医疗中国官网 | 便捷、优质且价格合理的医疗健康服务' || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: publicPath + 'googletagmanager.js',
        async: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0D7DFC' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/nuxt-swiper-plugin', ssr: 'client' },
    { src: '@/plugins/google', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { filename: '.env' }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
    // Doc: https://github.com/nuxt-community/dotenv-module
    // '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}
if (process.env.APP_ENV) {
  nuxtConfig['buildModules'] = [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.APP_ENV}` }]
  ]
}
module.exports = nuxtConfig
