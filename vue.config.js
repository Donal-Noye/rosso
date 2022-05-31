module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style//vendor/breakpoint.scss";
          @import "@/assets/style/_vars.scss";
        `
      }
    }
  }
};