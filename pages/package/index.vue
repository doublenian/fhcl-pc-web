<template>
  <div class="package">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div class="package-title responsive-container">
      <p
        style="margin-bottom:0.625rem;"
        class="text-font-50 text-black-main font-semibold"
      >
        优惠套餐
      </p>
      <p class="text-font-18 text-gray-main">
        富乐医疗提供全方位、高品质的医疗套餐，为客户的健康保驾护航。
      </p>
    </div>
    <div class="package-content responsive-container">
      <packageItem :packageList="packageList"></packageItem>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'
import packageItem from './components/package-item'

export default {
  data() {
    return {
      banner: [
        {
          title: '热销服务',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/package-banner.jpg',
          url: ''
        }
      ],
      packageList: [
        {
          packageId: '1',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package1.jpg',
              url: ''
            }
          ],
          title: '关爱宝贝成长套餐（0-3岁）',
          content: '本套餐包含：儿科医生问诊咨询、全面健康筛查、健康筛查评估'
        },
        {
          packageId: '2',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package2.jpg',
              url: ''
            }
          ],
          title: '关爱宝贝成长升级套餐（0-3岁）',
          content:
            '本套餐包含：医生门诊费、血常规检查。尿常规检查、25-羟基维生素D'
        },
        {
          packageId: '3',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package3.jpg',
              url: ''
            }
          ],
          title: '基础健康筛查套餐',
          content:
            '本套餐包含：检验检查项目：血常规、尿常规、肝胆功能检测、肾功能检测、心电图。吸烟史、饮酒史、用药史、营养状况、运动状况、家族史、避孕方法、性健康史、免疫接种史、体格检查、生命体征、常规检查、体重指数。'
        },
        {
          packageId: '4',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package4.jpg',
              url: ''
            }
          ],
          title: '女性健康筛查套餐',
          content:
            '本套餐包含：妇科问诊咨询阴道分泌物常规检查液基薄层细胞检查子宫附件彩超（妇科彩超）乳腺彩超'
        },
        {
          packageId: '5',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package5.jpg',
              url: ''
            }
          ],
          title: '儿童生长发育筛查套餐（0-3岁）',
          content:
            '本套餐包含：儿科医生问诊咨询、活动状况全面健康筛查、体温健康筛查评估、生长发育评估、婴幼儿喂养指导/儿童保健、综合评估报告解读'
        },
        {
          packageId: '6',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package6.jpg',
              url: ''
            }
          ],
          title: '亲子口腔健康套餐',
          content: '本套餐包含：1位成人和1位儿童的口腔健康检查及护理'
        },
        {
          packageId: '7',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package7.jpg',
              url: ''
            }
          ],
          title: '女性健康体检套餐',
          content:
            '本套餐包含：妇科问诊咨询、阴道分泌物常规检查、液基薄层细胞检查、血常规检查、尿常规检查、乳腺彩超、子宫及附件彩超、乳腺触诊、妇科检查'
        },
        {
          packageId: '8',
          image: [
            {
              img:
                'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/package/package8.jpg',
              url: ''
            }
          ],
          title: '口腔全面健康套餐',
          content:
            '本套餐包含：口腔医生问诊咨询、口腔全景摄影、超声洗牙、全口牙抛光、全口牙龈上药、牙周袋全口探测、全面口腔检查、日常护理指导'
        }
      ]
    }
  },
  components: {
    motionlessBanner,
    packageItem
  }
}
</script>

<style lang="less">
.package {
  padding-bottom: 6.25rem;
  .package-title {
    margin-top: 4.375rem;
    margin-bottom: 3.125rem;
    p:nth-of-type(1) {
      margin-bottom: 1.25rem;
    }
  }
}
</style>