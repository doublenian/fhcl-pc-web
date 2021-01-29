<template>
  <div class="news-item">
    <div
      class="news-item-contnent"
      v-for="(item, index) in newsList"
      :key="index"
      @click="tonewsDetail(item.newsId)"
    >
      <div
        class="news-image"
        style="height: 230px"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
      >
        <!-- <img :src="item.img" alt="" /> -->
      </div>

      <div class="news-item-text">
        <a
          class="text-font-20 text-black-main font-semibold"
          href="javascript:void(0)"
        >
          {{ item.title }}
        </a>
        <p class="news-time text-font-16 text-gray-main">{{ item.time }}</p>
        <div v-if="label" class="label flex justify-start text-font-14">
          <p v-for="(items, indexs) in item.label" :key="'label' + indexs">
            {{ items }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newsList', 'label', 'type'],
  data() {
    return {}
  },
  methods: {
    tonewsDetail(id) {
      console.log(this.type)
      if (this.type === 'coupe') {
        window.location.href = id
      } else {
        this.$router.push({ path: '/news/detail', query: { id: id } })
      }
    },
  },
}
</script>
<style lang="less">
.news-item {
  .news-item-contnent:hover {
    box-shadow: 0px 0px 50px -10px rgba(115, 121, 141, 0.3);
    .news-image {
      background-size: 110% 110%;
    }
  }
  .news-item-contnent {
    transition: 0.4s;
    border: 1px solid rgba(238, 240, 242, 1);
    margin-bottom: 3.75rem;
    .news-image {
      width: 100%;
      background-size: 100% 100%;
      height: 230px;
      background-repeat: no-repeat;
      background-position: center;
      transition: background-size 0.3s ease;
      will-change: background-size;
    }

    .news-item-text {
      width: 100%;
      position: relative;
      padding: 1.875rem 1.25rem;
      border-top: 1px solid rgba(238, 240, 242, 1);
      // margin-bottom: 3.75rem;
      a {
        word-break: break-all;
        display: -webkit-box; /**对象作为伸缩盒子模型展示**/
        -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp: 3; /**显示的行数**/
        overflow: hidden; /**隐藏超出的内容**/
        width: 100%;
        height: 5.625rem;
        margin-bottom: 1.25rem;
      }
      a:hover {
        color: #0d7dfc;
        text-decoration: underline;
      }
      .label {
        margin-top: 0.625rem;
        p {
          padding: 0.3125rem 0.75rem;
          background: #eef0f2;
          font-size: #73798d;
          margin-right: 0.625rem;
        }
      }
    }
  }
}
@screen h5 {
  .news-item {
    .news-item-contnent {
      width: 100%;

      @apply flex;
      @apply justify-between;
      @apply flex-wrap;
    }
  }
}
@screen pc {
  .news-item {
    .news-item-contnent {
      width: 24rem;
      display: block;
      float: left;
      margin-right: 24px;
    }
    .news-item-contnent:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
</style>