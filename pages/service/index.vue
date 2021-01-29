<template>
  <div class="fuller-service">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div class="ours-service text-center">
      <div class="ours-service-title responsive-container">
        <p
          style="margin-bottom:0.625rem;"
          class="text-font-50 text-black-main font-semibold"
        >
          我们的服务
        </p>
        <p class="text-font-18px text-gray-main">
          富乐医疗致力于通过垂直整合模式提供便捷、优质且价格合理的医疗健康服务，包括管理式医疗与医疗网络服务，初级诊疗和医学诊断、专科诊疗及医学辅助服务。
        </p>
      </div>
      <div
        class="ours-service-content responsive-container m-auto text-left h5:hidden pc:block"
        v-for="(item, index) in ourService"
        :key="'fuller-service' + index"
      >
        <div v-if="(index + 1) % 2 !== 0" class="pc:flex pc:justify-between">
          <div style="width: 639px; padding:0">
            <motionlessBanner :banner="item.img" type="img"></motionlessBanner>
          </div>
          <!-- <img :src="item.img[0].img" alt="" /> -->
          <div class="service_introduction bg-gray-module">
            <p
              style="margin-bottom:0.625rem;"
              class="text-font-40 text-black-main font-semibold"
            >
              {{ item.title }}
            </p>
            <p class="text-font-16 text-gray-main">
              {{ item.count }}
            </p>
            <div
              @click="toServicedetail(item.type)"
              style="cursor: pointer;"
              class="text-white"
            >
              了解更多
            </div>
          </div>
        </div>
        <div v-if="(index + 1) % 2 === 0" class="pc:flex pc:justify-between">
          <div class="service_introduction bg-gray-module">
            <p
              style="margin-bottom:0.625rem;"
              class="text-font-40 text-black-main font-semibold"
            >
              {{ item.title }}
            </p>
            <p class="text-font-16 text-gray-main">
              {{ item.count }}
            </p>
            <div
              @click="toServicedetail(item.type)"
              style="cursor: pointer;"
              class="text-white"
            >
              了解更多
            </div>
          </div>
          <!-- <img :src="item.img" alt="" /> -->
          <div style="width: 639px; padding:0">
            <motionlessBanner :banner="item.img" type="img"></motionlessBanner>
          </div>
        </div>
      </div>
      <div
        class="ours-service-content responsive-container m-auto text-left pc:hidden h5:block"
        v-for="(item, index) in ourService"
        :key="index"
      >
        <div class="pc:flex pc:justify-between">
          <div class="w-full">
            <motionlessBanner :banner="item.img" type="img"></motionlessBanner>
          </div>
          <!-- <img :src="item.img" alt="" /> -->
          <div class="service_introduction bg-gray-module">
            <p class="text-font-40 text-black-main font-semibold">
              {{ item.title }}
            </p>
            <p class="text-font-16 text-gray-main">
              {{ item.count }}
            </p>
            <div
              @click="toServicedetail(item.type)"
              style="cursor: pointer;"
              class="text-white"
            >
              了解更多
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'
import floatingRight from '@/components/floating-right'
export default {
  components: {
    motionlessBanner,
    floatingRight
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

      ourService: [
        {
          title: '个人服务',
          count:
            '富乐医疗提供门诊、疫苗接种、转诊绿色通道等医疗服务，以及日间手术、胃肠镜检查、高端私人定制健康筛查等特色服务。',
          img: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/service1.png',
              url: ''
            }
          ],

          type: 'individual'
        },
        {
          title: '企业服务',
          count:
            '富乐医疗通过企业医疗中心，零售诊所及医疗网络服务可为客户提供从诊疗到医疗费用直付的全面服务。',
          img: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/service2.png',
              url: ''
            }
          ],

          type: 'enterprise'
        },
        {
          title: '健康科普',
          count: '全方位、专业的健康知识和资讯，顾客想了解的，尽在这里。',
          img: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/service3.png',
              url: ''
            }
          ],
          url: '',
          type: 'coupe'
        }
      ]
    }
  },
  methods: {
    toServicedetail(id) {
      if (id === 'coupe') {
        this.$router.push({ path: '/service/coupe' })
      } else {
        this.$router.push({ path: '/service/detail', query: { id: id } })
      }
    }
  }
}
</script>

<style lang="less">
.fuller-service {
  .fuller-service-banner {
    position: relative;
    .service-banner-title {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      //
      p {
        width: 60%;
        margin-top: 0.625rem;
      }
    }
  }
  .ours-service {
    margin: 6.25rem 0;
    .ours-service-title {
      margin: 0 auto;
      p:nth-of-type(1) {
        margin-bottom: 1.875rem;
      }
    }

    .ours-service-content > div {
      margin-top: 3.125rem;
    }
    .service_introduction {
      padding: 4.75rem 3.125rem;
      p:nth-of-type(1) {
        margin-bottom: 1.25rem;
      }
      div {
        margin-top: 3.125rem;
        width: 11.25rem;
        height: 3.375rem;
        background: #0d7dfc;
        text-align: center;
        line-height: 3.375rem;
      }
    }
  }

  //   margin-top: 82px;
}
@screen h5 {
  .service-banner-title {
    bottom: 20%;
  }
  .ours-service-title {
  }
  .service_introduction {
    width: 100%;
  }
  .ours-service-content {
    .banner-swiper-image {
      height: 210px;
    }
  }
}
@screen pc {
  .service-banner-title {
    width: 1200px;
    bottom: 30%;
  }
  .ours-service-title {
    width: 520px;
  }
  .ours-service-content {
    img {
      width: 639px;
    }
  }
  .service_introduction {
    width: 540px;
    max-height: 400px;
  }
  .ours-service-content {
    width: 1200px;
    .banner-swiper-image {
      height: 400px;
    }
  }
}
</style>
