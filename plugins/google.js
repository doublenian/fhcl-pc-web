export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
    console.log(process.env.GOOGLE_ALA_ID)
    /* 告诉增加一个PV */
    try {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', process.env.GOOGLE_ALA_ID)
    } catch (e) {}
  })
}
