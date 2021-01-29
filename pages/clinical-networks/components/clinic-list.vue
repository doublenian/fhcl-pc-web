<template>
  <div class="clinicList flex justify-between flex-wrap">
    <div
      class="clinicItem"
      v-for="(item, index) in clinicLists"
      :key="'clinic' + index"
      @click="onclickDetail(item.id)"
    >
      <div
        class="clinic_image"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
      ></div>
      <!-- <img :src="item.img" alt="" /> -->
      <div class="clincList_text">
        <p class="clincList_title text-font-20 text-black-main font-semibold">
          {{ item.name }}
        </p>
        <p class="clinicList_dizhi text-font-16 text-gray-main">
          {{ item.address }}
        </p>
        <p
          class="clincList_count text-font-18 text-primary font-semibold cursor-pointer"
        >
          {{ item.button }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['clinicLists'],
  data() {
    return {
      list: []
    }
  },
  methods: {
    onclickDetail(id) {
      this.$router.push({
        path: '/clinical-networks/detail',
        query: { id: id }
      })
    }
  },
  components: {}
}
</script>
<style lang="less">
.clinicList {
  .clinic_image {
    width: 100%;
    background-size: 100%;
    height: 230px;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size 0.3s ease;
    will-change: background-size;
  }
  .clinicItem:hover {
    box-shadow: 0px 0px 50px -10px rgba(115, 121, 141, 0.3);
    .clinic_image {
      background-size: 110%;
    }
  }
  .clinicItem {
    transition: 0.4s;
    position: relative;
    // transition: box-shadow 0.3s ease;
    // will-change: box-shadow;
    // min-height: 26.125rem;
    border: 1px solid rgba(238, 240, 242, 1);
    .clincList_text {
      height: 11.75rem;
      padding: 1.875rem 1.25rem;
      .clincList_title {
        margin-bottom: 0.625rem;
        word-break: break-all;
        display: -webkit-box; /**对象作为伸缩盒子模型展示**/
        -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp: 1; /**显示的行数**/
        overflow: hidden; /**隐藏超出的内容**/
      }
      .clinicList_dizhi {
        word-break: break-all;
        display: -webkit-box; /**对象作为伸缩盒子模型展示**/
        -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp: 2; /**显示的行数**/
        overflow: hidden; /**隐藏超出的内容**/
      }
      .clincList_count {
        position: absolute;
        bottom: 1.875rem;
      }
    }
  }
}
@screen h5 {
  .clinicList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .clinicItem {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
}
@screen pc {
  .clinicList {
    display: block;
    .clinicItem {
      width: 384px;
      margin-right: 24px;
      margin-bottom: 24px;
      float: left;
    }
    .clinicItem:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
</style>