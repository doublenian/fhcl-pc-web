<template>
  <div class="administrative-components">
    <div
      class="administrative_item"
      v-for="(item, index) in dataList"
      :key="index"
    >
      <img :src="item.img" alt="" />
      <p class="text-font-16 font-black-main">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataList'],
  data() {
    return {}
  }
}
</script>
<style lang="less">
.administrative-components {
  // margin-bottom: -1.5rem;
  .administrative_item {
    height: 9.375rem;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-top: 1.5rem;
    img {
      width: 3.125rem;
      margin: 0.625rem auto;
    }
  }
}
@screen h5 {
  .administrative-components {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .administrative_item {
      width: 46%;
    }
  }
}
@screen pc {
  .administrative-components {
    display: block;
    width: 49.5rem;
    overflow: hidden;
    .administrative_item {
      width: 11.25rem;
      margin-right: 24px;
      float: left;
    }
    .administrative_item:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}
</style>