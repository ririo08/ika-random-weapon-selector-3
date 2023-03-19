// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'スプラトゥーン3 ランダムブキセレクター'
export default defineNuxtConfig({
  app: {
    baseURL: '/ika-random-weapon-selector-3/',
    head: {
      title: title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:site:name',
          content: title,
        },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: title },
        {
          property: 'og:url',
          content: 'https://ririo.dev/ika-random-weapon-selector-3/',
        },
        {
          property: 'og:description',
          content: 'Splatoon3に存在するブキをランダムに選ぶことができます！',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap',
        },
      ],
    },
  },
})
