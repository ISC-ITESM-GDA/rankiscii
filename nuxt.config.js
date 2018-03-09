module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Taller Vertical 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Evaluate Projects for Taller Vertical' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.css' },
    ],
  },
  plugins:[
    {src: '~/plugins/firebase'}, // use firebase
    {src: '~/plugins/semantic'} // use firebase
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
