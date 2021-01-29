<template>
  <div class="motionlessBanners w-full">
    <div v-if="banner.length > 1" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper ">
        <div
          class="swiper-slide"
          v-for="(item, indexs) in banner"
          :key="indexs"
        >
          <div
            @click="toimgurl(item.url)"
            :class="{ bannerTop: type === 'bannerImg' }"
            class="motionless-banner"
          >
            <div class="banner-box">
              <!-- <img class="w-full" :src="item.img" alt="" /> -->
              <div
                class="banner-swiper-image"
                :style="{ backgroundImage: 'url(' + item.img + ')' }"
              ></div>

              <div
                v-if="type === 'bannerImg'"
                class="motionless-banner-title  responsive-container"
              >
                <p
                  class="pc:text-font-50 h5:text-font-18 text-black-main font-semibold banner_text"
                >
                  {{ item.title }}
                </p>
                <!-- <p class="text-gray-main pc:text-font-20 h5:text-font-14">
                  {{ item.count }}
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div
      class="motionless-banner"
      :class="{ bannerTop: type === 'bannerImg' }"
      v-if="banner.length === 1"
    >
      <div class="banner-box">
        <!-- <img class="w-full" :src="banner[0].img" alt="" /> -->
        <div
          class="banner-swiper-image"
          :style="{ backgroundImage: 'url(' + banner[0].img + ')' }"
        ></div>
        <div
          v-if="type === 'bannerImg'"
          class="motionless-banner-title  responsive-container"
        >
          <div>
            <p
              class="pc:text-font-50 h5:text-font-18 text-white font-semibold banner_text"
            >
              {{ banner[0].title }}
            </p>
            <!-- <p class="text-white pc:text-font-20 h5:text-font-14">
              {{ banner[0].count }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['banner', 'type'],
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="${className} swiper-pagination-bullet-custom">
            </div>`
          }
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        }
      }
    }
  },
  methods: {
    toimgurl(url) {
      if (url) {
        window.location.href = url
      }
    }
  }
}
</script>
<style lang="less">
.motionlessBanners {
  .bannerTop {
    padding-top: 82px;
  }
  .motionless-banner {
    .banner-box {
      position: relative;
      .motionless-banner-title {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 0;
        top: 0;
        color: #ffffff !important;
        display: flex;
        justify-content: left;
        align-items: flex-end;
        // transform: translate(-50%, -50%);
      }
    }
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

@screen h5 {
  .motionlessBanners {
    .motionless-banner-title {
      padding-left: 40px;
      // bottom: 10%;
      // top: 50%;
      // transform: translate(-50%, -50%);
      p {
        width: 170px;
        margin-top: 0.625rem;
      }
    }
    .arrow {
      width: 2.5rem;
      height: 2.5rem;
    }
    .swiper-pagination-bullet-custom {
      width: 0.4rem;
      height: 0.4rem;
    }
    .swiper-pagination-bullets {
      bottom: 0.425rem !important;
    }
    .banner-swiper-image {
      height: 108px;
      background-size: cover;
      background-position: center;
    }
    .banner_text {
      margin-bottom: 20px;
    }
  }
}
@screen pc {
  .motionlessBanners {
    .motionless-banner-title {
      width: 1200px;
      padding-left: 120px;
      // bottom: 10%;
      p {
        width: 446px;
        margin-top: 0.625rem;
      }
    }
    .arrow {
      width: 3.75rem;
      height: 3.75rem;
    }
    .swiper-pagination-bullet-custom {
      width: 0.6rem;
      height: 0.6rem;
    }
    .swiper-pagination-bullets {
      bottom: 0.625rem !important;
    }
    .banner-swiper-image {
      height: 471px;
    }
    .banner_text {
      margin-bottom: 60px;
    }
  }
}
</style>