<template>
  <div class="clinic-package-content">
    <div class="package-header mb-10">
      <p
        style="margin-bottom:0.625rem;"
        class=" pc:text-font-50 h5:text-font-40 pc:text-center h5:text-left"
      >
        优惠套餐
      </p>
      <p class="pc:text-center h5:text-left">
        富乐医疗提供全方位、高品质的医疗套餐，为客户的健康保驾护航。
      </p>
    </div>
    <div>
      <packageItem :packageList="packageList"></packageItem>
    </div>
    <div
      class="clinic-button mx-auto mt-10"
      @click="$router.push({ path: '/package' })"
    >
      查看全部
    </div>
  </div>
</template>

<script>
import PackageItem from '../package/components/package-item'
export default {
  components: {
    PackageItem
  },
  data() {
    return {
      packageList: [
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
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import './button.less';
@screen h5 {
  .clinic-package-content {
    padding: 2.25rem 0;
  }
}
@screen pc {
  .clinic-package-content {
    padding: 2.25rem 0;
  }
}

.clinic-package-content {
  width: 100%;
  .package-header {
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