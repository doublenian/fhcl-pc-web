<template>
  <div class="serviceDetail">
    <floating-right></floating-right>
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div class="serviceDetail-title">
      <img :src="serviceDate.serviceTile.img" alt="" />
      <div class="serviceDetail-title-content bg-gray-main">
        <p
          class="text-white pc:text-font-50 h5:text-font-24 pc:mb-5 h5:mb-2 font-semibold"
        >
          {{ serviceDate.serviceTile.title }}
        </p>
        <p class="text-white text-font-18">
          {{ serviceDate.serviceTile.count }}
        </p>
      </div>
    </div>
    <div
      class="Servicelist-box "
      v-for="(item, index) in serviceDate.serviceCount"
      :key="'serviceDetail-' + index"
    >
      <serviceList :serviceListDate="item"></serviceList>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'
import { serviceDetailList } from './data.js'
// import banner from '@/assets/images/service/banner.png'
import floatingRight from '@/components/floating-right'
import serviceList from './components/serviceList'
export default {
  components: {
    motionlessBanner,
    floatingRight,
    serviceList
  },
  data() {
    return {
      banner: [
        {
          title: '医疗健康服务',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/service-banner.jpg',
          url: ''
        }
      ],
      serviceDetailList,
      serviceDate: {}
    }
  },

  created() {
    this.serviceDetailList.forEach((item, index) => {
      if (item.type === this.$route.query.id) {
        this.serviceDate = item
      }
    })
  }
}
</script>
<style lang="less">
.serviceDetail {
  .serviceDetail-title {
    position: relative;
    margin: 6.25rem auto;
  }

  .Servicelist-box:nth-of-type(2n + 1) {
    background: #ffffff;
  }
  .Servicelist-box:nth-of-type(2n) {
    background: #f1f2f6;
  }
}

@screen h5 {
  .serviceDetail {
    .serviceDetail-title {
      // float: left;
      height: 280px;
      background: #fff;
      // width: 80%;
      img {
        width: 94.66vw;
        float: left;
      }
      .serviceDetail-title-content {
        float: right;
        z-index: 10;
        width: 94.66vw;
        margin-left: 5.34vw;
        margin-top: -24px;
        padding: 1.25rem;
      }
    }
  }
}
@screen pc {
  .serviceDetail {
    .serviceDetail-title {
      float: none;
      width: 1200px;
      height: auto;
      img {
        float: none;
        width: 61.66%;
      }
      .serviceDetail-title-content {
        float: none;
        width: 57.5%;
        padding: 5.875rem 3.1875rem 7.125rem 3.1875rem;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
      }
    }
  }
}
</style>