<template>
  <div class="swiper-banner">
    <img
      src="~assets/images/home/arrow-left.png"
      alt=""
      class="arrow left-arrow cursor-pointer"
      @click="goLeft"
    />
    <img
      src="~assets/images/home/arrow-right.png"
      alt=""
      class="arrow right-arrow cursor-pointer"
      @click="goRight"
    />
    <div v-swiper="swiperOption" :instance-name="bannerId">
      <div class="swiper-wrapper ">
        <div
          class="swiper-slide"
          v-for="(item, index) in bannerData"
          :key="bannerId + index"
        >
          <slot :banner="item"></slot>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array,
      required: true
    },
    bannerId: {
      type: String,
      required: true
    },

    swiperOptions: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    let self = this
    return {
      swiperName: this.bannerId,
      swiperOption: {
        ...this.swiperOptions,
        loop: true,
        on: {
          slideChange: function() {
            self.$emit('indexChanged', this.realIndex)
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="${className} swiper-pagination-bullet-custom">
            </div>`
          }
        }
      }
    }
  },
  computed: {
    mySwiper: {
      cache: false,
      get() {
        return this[this.swiperName]
      }
    }
  },

  methods: {
    goLeft() {
      this.mySwiper.slidePrev()
    },
    goRight() {
      this.mySwiper.slideNext()
    },
    goTo(val) {
      this.mySwiper.slideToLoop(val)
    }
  }
}
</script>

<style lang="less">
@screen h5 {
  .swiper-banner {
    .arrow {
      width: 2.5rem;
      height: 2.5rem;
    }
    .swiper-pagination-bullet-custom {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}
@screen pc {
  .swiper-banner {
    .arrow {
      width: 3.75rem;
      height: 3.75rem;
    }
    .swiper-pagination-bullet-custom {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
.swiper-banner {
  position: relative;
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  .left-arrow {
    left: 5%;
  }
  .right-arrow {
    right: 5%;
  }
  .swiper-pagination-bullet-custom {
    position: relative;
    display: inline-block;

    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transition: all 0.3s;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background: rgba(255, 255, 255, 1);
    }
  }
  .swiper-wrapper {
    width: 100%;
    position: relative;
  }
}
</style>
