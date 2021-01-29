<template>
  <div class="home-page">
    <div class="swiper-banner-wrapper">
      <swiper-banner
        :banner-data="bannerData"
        banner-id="home-banner"
        :swiper-options="swiperOptions"
        @indexChanged="bannerChanged"
      >
        <template v-slot:default="{ banner }">
          <a
            class="swiper-slider-content block"
            :href="banner.link"
            :style="{ backgroundImage: 'url(' + banner.imageUrl + ')' }"
          >
            <span class="banner-text" v-if="banner.text">{{
              banner.text
            }}</span>
          </a>
        </template>
      </swiper-banner>
      <!-- <div
        class="slider-desc"
        :key="indexKey"
        v-if="bannerData[swiperIndex].desc"
      >
        <p>{{ bannerData[swiperIndex].title }}</p>
        <p>{{ bannerData[swiperIndex].desc }}</p>
      </div> -->
    </div>

    <div class="responsive-container">
      <clinic-network></clinic-network>
    </div>
    <clinic-service></clinic-service>
    <div class="responsive-container">
      <clinic-team></clinic-team>
    </div>
    <div class="responsive-container">
      <clinic-package></clinic-package>
    </div>
  </div>
</template>

<script>
import floatingRight from '@/components/floating-right'
import SwiperBanner from '@/components/swiper-banner'
import banner1 from '@/assets/images/home/assets/home_banner01.jpg'
import ClinicNetwork from './components/clinic-network'
import ClinicService from './components/clinic-service'
import ClinicTeam from './components/clinic-team'
import ClinicPackage from './components/clinic-package'

export default {
  components: {
    SwiperBanner,
    ClinicNetwork,
    ClinicService,
    ClinicTeam,
    ClinicPackage,
    floatingRight
  },
  data() {
    return {
      indexKey: 0,
      swiperIndex: 0,
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        }
      },
      bannerData: [
        {
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/banner11.jpg',
          text: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          link: '/medical-team'
        },
        {
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/banner12.jpg',
          text: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          link: '/clinical-networks'
        },
        {
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/banner3.jpg',
          text: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          link: '/package'
        },
        {
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/banner4.jpg',
          text: '',
          link: '/clinical-networks/detail?id=ClinicId14'
        }
      ]
    }
  },
  methods: {
    bannerChanged(ev) {
      this.indexKey++
      this.swiperIndex = ev
    }
  }
}
</script>

<style lang="less">
@keyframes scaleX {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
.home-page {
  padding-top: 82px;
  .swiper-banner-wrapper {
    position: relative;
    .slider-desc {
      position: absolute;
      z-index: 1;
      right: 0;

      text-align: right;
      color: white;
      background-color: rgba(94, 140, 179, 0.5);
      transform-origin: right;
      animation: scaleX 0.6s ease-in-out;
    }
    .swiper-slider-content {
      width: 100%;
      background-size: cover;
      background-position: center;
      position: relative;

      .banner-text {
        position: absolute;

        background: rgba(255, 255, 255, 0.7);
      }
    }
  }
}
@screen h5 {
  .home-page {
    .swiper-banner-wrapper {
      position: relative;
      .swiper-pagination {
        display: none;
      }
      .swiper-slider-content {
        height: 50vw;
        .banner-text {
          bottom: 0;
          right: 0;
          // width: 100%;
          padding: 10px;
          @apply text-primary text-font-16;
          z-index: 2;
        }
      }
    }
  }
}
@screen pc {
  .home-page {
    .swiper-banner-wrapper {
      position: relative;
      .swiper-slider-content {
        height: calc(100vh - 82px);
        .banner-text {
          bottom: 4.5rem;
          right: 0;
          padding: 1.875rem 6.75rem 1.6875rem 1.6875rem;
          @apply text-primary text-font-24;
        }
      }
    }
  }
}
</style>
