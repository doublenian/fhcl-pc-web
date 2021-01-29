<template>
  <div class="clinic-service-content">
    <div class="service-header mb-10">
      <div class="responsive-container">
        <p
          style="margin-bottom:0.625rem;"
          class=" pc:text-font-50 h5:text-font-40 pc:text-center h5:text-left"
        >
          医疗服务
        </p>
        <p class="pc:text-center h5:text-left">
          富乐医疗来自新加坡，致力于为每位客户提供便捷、优质且价格合理的医疗健康服务。
        </p>
      </div>
    </div>
    <div class="responsive-container  service-list-wrapper">
      <service-item
        :service-info="item"
        v-for="(item, index) in serviceList"
        :key="'serviceItem' + index"
      ></service-item>
    </div>
  </div>
</template>

<script>
import ServiceItem from './service-item'

export default {
  components: {
    ServiceItem
  },
  data() {
    return {
      serviceList: [
        {
          name: '个人服务',
          detail:
            '富乐医疗提供门诊、疫苗接种、转诊绿色通道等医疗服务，以及日间手术、胃肠镜检查、高端私人定制健康筛查等特色服务。',
          type: 'individual',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/service1.png'
        },
        {
          name: '企业服务',
          detail:
            '富乐医疗通过企业医疗中心，零售诊所及医疗网络服务可为客户提供从诊疗到医疗费用直付的全面服务。',
          type: 'enterprise',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/service2.png'
        },
        {
          name: '健康科普',
          detail: '全方位、专业的健康知识和资讯，顾客想了解的，尽在这里。',
          type: 'coupe',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/home/service3.png'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@screen h5 {
  .clinic-service-content {
    padding: 2.25rem 0;
    .service-list-wrapper {
      @apply flex flex-col items-center;
    }
  }
}
@screen pc {
  .clinic-service-content {
    padding: 6.25rem 0;
    .service-list-wrapper {
      padding: 0;
      @apply flex flex-row justify-between;
    }
  }
}

.clinic-service-content {
  width: 100%;
  background: #f1f2f6;
  .service-header {
    text-align: center;
    p:first-child {
      @apply text-black-main  font-bold;
    }
    p:last-child {
      @apply text-gray-main text-font-16;
    }
  }
}
</style>