// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/ika-random-weapon-selector-3/',
    head: {
      title: 'スプラトゥーン3 ランダムブキセレクター',
      meta: [{ charset: 'utf-8' }],
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
