module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ابیات ناب پارسی',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'تک‌بیت‌های شیرین، ناب و پندآموز پارسی' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: 'bulma/css/bulma.css'},
//     { src: 'bulma/sass/grid/columns.sass', lang: 'sass' },
//     { src: 'bulma/sass/components/card.sass', lang: 'sass' },
    '~assets/css/main.css'
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
