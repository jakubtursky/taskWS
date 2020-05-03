module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/assets/scss/helpers/misc/_variables.scss';
        @import '@/assets/scss/helpers/misc/_mixins.scss';
            `,
      },
    },
  },
}
