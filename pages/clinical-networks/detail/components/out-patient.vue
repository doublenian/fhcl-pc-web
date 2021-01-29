<template>
  <div class="outPatient-component">
    <div class="outPatient_item" v-for="(item, index) in dataList" :key="index">
      <img :src="item.img" alt="" />
      <p>{{ item.text }}</p>
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
.outPatient-component {
  margin-bottom: -3.75rem;
  //   padding: 0 3.125rem;
  overflow: hidden;
  .outPatient_item {
    float: left;
    img {
      margin-bottom: 1.25rem;
    }
    p {
      width: 6.43rem;
      text-align: center;
      margin: 0 auto;
    }
  }
  .outPatient_item:nth-of-type(3n) {
    margin-right: 0;
  }
}
@screen h5 {
  .outPatient-component {
    width: 100%;
    padding-bottom: ;
    .outPatient_item {
      margin-bottom: 1.5rem;
      width: 28%;
      margin-right: 8%;
    }
  }
}
@screen pc {
  .outPatient-component {
    width: 49.5rem;
    padding: 0;
    display: block;
    overflow: hidden;
    .outPatient_item {
      margin-bottom: 3.75rem;
      width: 8.125rem;
      margin-right: 126px;
    }
  }
}
</style>