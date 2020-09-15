// .env設定
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

// generate時にaxiosを使って詳細ページを生成
const axios = require('axios')

// meta設定
const siteTitle = 'Takuro Fukuma | Video Grapher'
const siteDescription = '福岡で働くビデオグラファー、福間拓郎のポートフォリオサイトです。'
const siteUrl = process.env.SITE_URL
const ogImage = `${siteUrl}/assets/img/ogp.png`

export default {
  srcDir: 'src/',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + 'Takuro Fukuma | Video Grapher'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: siteTitle },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: siteUrl },
      { hid: 'og:title', property: 'og:title', content: siteTitle },
      { hid: 'og:description', property: 'og:description', content: siteDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: ogImage },
      { hid: 'twitter:url', name: 'twitter:url', content: siteUrl },
      { hid: 'twitter:title', name: 'twitter:title', content: siteTitle },
      { hid: 'twitter:description', name: 'twitter:description', content: siteDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/markdownit',
  ],
  webfontloader: {
    google: {
      families: ['Cabin:400','Spectral:400,800']
    }
  },
  dotenv: {
    path: process.cwd()
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // .scssファイルをグローバルに読み込む
  styleResources: {
    scss: [
      '~/assets/scss/_setting.scss'
    ]
  },
  // Netlifyへ詳細ページの自動デプロイ
  markdownit: {
    html: true,
    injected: true,
    preset: "default"
  },
  // .env設定
  env: {
    API_KEY
  },
  generate: {
    routes() {
      const careers = axios
        .get("https://takurofukuma.microcms.io/api/v1/careers", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(career => {
            return "/careers/" + career.id;
          });
        });
      const posts = axios
        .get("https://takurofukuma.microcms.io/api/v1/posts", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(post => {
            return "/careers/posts/" + post.id;
          });
        });
      return Promise.all([careers, posts]).then(values => {
        return values.join().split(",");
      });
    }
  }
}
