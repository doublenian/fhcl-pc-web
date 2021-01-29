<template>
  <div class="clinic-network-content">
    <div class="network-header mb-10">
      <p
        style="margin-bottom:0.625rem;"
        class=" pc:text-font-50 h5:text-font-40 pc:text-center h5:text-left"
      >
        诊所网络
      </p>
      <p class="pc:text-center h5:text-left">
        自进入中国以来，富乐医疗中国在10余个城市，开设并运营了30多家诊所。
      </p>
    </div>
    <div class="network-body ">
      <div class="clinic-bg">
        <div class="clinic-info text-white flex flex-col justify-center pl-4">
          <a
            class="clinic-info-detail block"
            :key="bannerData[swiperIndex].name"
            :href="'/clinical-networks/detail?id=' + bannerData[swiperIndex].id"
          >
            <p class=" pc:text-font-20 h5:text-font-16 mb-1 flex items-center">
              {{ bannerData[swiperIndex].name
              }}<img
                src="@/assets/images/arrow-right.png"
                class="ml-2 w-4 h-4"
              />
            </p>
            <p class=" pc:text-font-16 h5:text-font-12">
              {{ bannerData[swiperIndex].address }}
            </p>
          </a>
        </div>
        <swiper-banner
          :banner-data="bannerData"
          ref="homeBannerSwiper"
          @indexChanged="(ev) => (swiperIndex = ev)"
          banner-id="clinic-network"
          :swiper-options="swiperOptions"
        >
          <template v-slot:default="{ banner }">
            <div
              class="clinic-bg-slider"
              :style="{
                backgroundImage:
                  'url(' + banner.img + '?imageMogr2/thumbnail/!80p' + ')'
              }"
            ></div>
          </template>
        </swiper-banner>
      </div>
      <div class="clinic-list-wrapper">
        <div class="clinic-list ">
          <p
            @click="clinicItemClicked(index)"
            v-for="(item, index) in bannerData"
            :key="'bannerData' + index"
          >
            <span :class="[swiperIndex === index ? 'clinic-active' : '']">{{
              item.name
            }}</span>
          </p>
        </div>
        <div
          class="clinic-button"
          @click="$router.push({ path: '/clinical-networks' })"
        >
          查看更多诊所
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperBanner from '@/components/swiper-banner'
import imgClinic from '@/assets/images/home/assets/img_clinic.png'
import { list } from '../clinical-networks/data'
export default {
  components: {
    SwiperBanner
  },
  data() {
    return {
      clinicIndex: 0,
      swiperIndex: 0,
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        }
      },
      bannerData: list.slice(0, 5)
    }
  },
  methods: {
    clinicItemClicked(index) {
      this.$refs.homeBannerSwiper.goTo(index)
    }
  }
}
</script>

<style lang="less">
@import './button.less';
@keyframes slideUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@screen h5 {
  .clinic-network-content {
    padding: 2.25rem 0;
    .network-body {
      width: 100%;
      .clinic-bg {
        // width: 90vw;
        height: 45vw;
        margin: auto;
        position: relative;
        .clinic-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4rem;
          background: rgba(0, 0, 0, 0.26);
          z-index: 10;
          .clinic-info-detail {
            animation: slideUp 0.3s ease;
            // .icon-right {
            //   width: 1.5rem;
            //   height: 1.5rem;
            // }
          }
        }
        .swiper-container {
          height: 45vw;
          .swiper-pagination {
            display: none;
          }
        }
        .clinic-bg-slider {
          width: 100%;
          height: 100%;
          position: relative;
          background-size: cover;
          background-position: center;
        }
      }
      .clinic-list-wrapper {
        display: none;
      }
    }
  }
}
@screen pc {
  .clinic-network-content {
    padding: 6.25rem 0;
    .network-body {
      @apply flex justify-center;
      width: 100%;
      .clinic-bg {
        width: 690px;
        height: 425px;
        margin-right: 3rem;
        margin-left: 0;
        position: relative;
        .clinic-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 88px;
          background: rgba(0, 0, 0, 0.26);
          z-index: 10;
          .clinic-info-detail {
            animation: slideUp 0.3s ease;
          }
        }
        .arrow {
          display: none;
        }
        .swiper-container {
          height: 425px;
          .swiper-pagination {
            display: none;
          }
        }
        .clinic-bg-slider {
          width: 100%;
          height: 100%;
          position: relative;
          background-size: cover;
          background-position: center;
        }
      }
      .clinic-list-wrapper {
        @apply flex flex-col justify-between;
      }
    }
  }
}
.clinic-network-content {
  width: 100%;
  .network-header {
    text-align: center;
    p:first-child {
      @apply text-black-main  font-bold;
    }
    p:last-child {
      @apply text-gray-main text-font-16;
    }
  }
  .network-body {
    .clinic-list {
      @apply text-font-20 flex flex-col text-black-main;

      p {
        margin-bottom: 30px;
        display: inline-block;
        cursor: pointer;

        span {
          display: inline-block;
          position: relative;
        }
        .clinic-active {
          @apply text-primary;
          &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            bottom: -5px;
            background: theme('colors.primary');
          }
        }
        // &:hover {
        //   .clinic-active;
        // }
      }
    }
  }
}
</style>