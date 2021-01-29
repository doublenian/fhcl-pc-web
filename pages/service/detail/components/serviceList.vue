<template>
  <div class="serviceList responsive-container">
    <p
      class="serviceListTitle text-font-40 text-black-main font-semibold h5:hidden pc:block"
    >
      {{ serviceListDate.title }}
    </p>
    <div class="pc:flex pc:justify-between">
      <div class="serviceList_left">
        <!-- <img style="" :src="serviceListDate.img" alt="" /> -->
        <motionlessBanner :banner="serviceListDate.img"></motionlessBanner>
      </div>
      <p
        class="serviceListTitle text-font-30 text-center text-black-main font-semibold h5:block pc:hidden"
      >
        {{ serviceListDate.title }}
      </p>
      <div class="serviceList_right">
        <div
          class=" w-full "
          v-for="(item, index) in serviceListDate.connt"
          :key="index"
        >
          <div class=" pc:flex pc:justify-between h5:block">
            <p
              class="serviceList_right_title text-black-main text-font-16 font-semibold"
            >
              {{ item.title }}
            </p>
            <div
              class="serviceList_right_count text-font-16"
              v-html="item.text"
            ></div>
          </div>
          <div
            v-if="index !== serviceListDate.connt.length - 1"
            style="margin:1.875rem 0; opacity:0.3"
            class="h-px bg-gray-main"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'
export default {
  components: {
    motionlessBanner
  },
  data() {
    return {}
  },
  props: ['serviceListDate'],
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
.serviceList {
  margin: 0 auto;
  padding: 4.375rem 20px 6.25rem 20px;
  .serviceList_left {
    .banner-swiper-image {
      height: 350px;
    }
    margin-bottom: 3.125rem;
  }
  .serviceList_right {
    margin-bottom: 3.125rem;
  }
  .serviceListTitle {
    margin-bottom: 3.125rem;
  }
  .serviceList_right_title {
    width: 20%;
    margin-bottom: 0.625rem;
  }
  .serviceList_right_count {
    width: 74%;

    .text_title {
      margin-top: 1.25rem;
      span {
        color: #73798d;
        font-weight: 600;
      }
    }
    .text_title:nth-of-type(1) {
      margin-top: 0;
    }
  }
}
@screen h5 {
  .serviceList {
    .serviceList_left {
      @apply w-full;
    }
    .serviceList_right {
      width: 100%;
    }
    .serviceList_right_count {
      width: 100%;
    }
    .serviceList_right_title {
      width: 100%;
    }
  }
}
@screen pc {
  .serviceList {
    width: 1200px;
    .serviceList_left {
      width: 537px;
      img {
        width: 33.56rem;
      }
    }
    .serviceList_right {
      width: 588px;
    }
    .serviceList_right_count {
      width: 74%;
    }
    .serviceList_right_title {
      width: 20%;
    }
  }
}
</style>