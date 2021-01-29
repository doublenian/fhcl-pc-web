<template>
  <div class="layout-main" ontouchstart="">
    <layout-header></layout-header>
    <nuxt />
    <floatingRight></floatingRight>
    <layout-footer></layout-footer>
  </div>
</template>
<script>
import floatingRight from '@/components/floating-right'
import LayoutFooter from './layout-footer'
import LayoutHeader from './layout-header'
export default {
  components: {
    LayoutHeader,
    LayoutFooter,
    floatingRight
  },
  data() {
    return {}
  }
}
</script>
<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;

  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  // overflow-x: scroll;
}

@screen h5 {
  html {
    font-size: 14px;
  }
  .responsive-container {
    width: 100%;
    padding: 0 20px;
  }
}
@screen pc {
  html {
    font-size: 16px;
  }
  .responsive-container {
    width: 1200px;
    margin: auto;
    padding: 0;
  }
}
@screen pc {
  body {
    min-width: 1200px;
  }
}
body {
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  outline: none;
}
</style>
