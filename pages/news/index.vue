<template>
  <div class="news">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div class="news-title responsive-container">
      <p
        style="margin-bottom:0.625rem;"
        class="text-font-50 text-black-main font-semibold"
      >
        新闻及活动
      </p>
      <p class="text-font-18 text-gray-main">
        富乐医疗提供全方位、高品质的医疗套餐，为客户的健康保驾护航。
      </p>
    </div>
    <div class="news-contnet">
      <client-only placeholder="加载中...">
        <infinite-loading ref="infiniteLoading" :data="newsList">
          <template v-slot:default="{ finiteData }">
            <newsItem :newsList="finiteData" type="news"></newsItem>
          </template>
        </infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
// import banner from '@/assets/images/news/banner.png'
import motionlessBanner from '@/components/motionless-banner'
import infiniteLoading from '@/components/infinite-loading'
import newsItem from './components/news-item'
const news1 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news1.jpg'
const news2 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news2.jpg'
const news3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news3.jpg'
const news4 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news4.jpg'
const news5 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news5.jpg'
const news6 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news6.jpg'
const news7 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news7.png'
const news8 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news8.png'
const news9 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news9.jpg'
const news10 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/news/img_news10.jpg'
export default {
  components: {
    motionlessBanner,
    newsItem,
    infiniteLoading
  },
  data() {
    return {
      banner: [
        {
          title: '富乐新闻',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/news-banner.jpg',
          url: ''
        }
      ],
      newsList: [
        {
          img: news1,
          title: '富乐医疗在滨城大连首家门诊部开业啦！',
          time: '2020-6-19 21:00',
          newsId: '1'
        },
        {
          img: news2,
          title: '抗击疫情，富乐医疗一直在行动',
          time: '2020-05-28 21:00',
          newsId: '2'
        },
        {
          img: news3,
          title: '富乐医疗中国向湖北省捐赠20万件医用防疫物资',
          time: '2020-02-22 21:40',
          newsId: '3'
        },
        {
          img: news4,
          title: '富乐医疗总裁辛大伟：忽略员工健康影响公司长期业绩',
          time: '2020-02-03 15:55',
          newsId: '4'
        },
        {
          img: news5,
          title: '2020年1月富乐医疗荣获2020年新加坡健康优质服务奖（SHQSA）',
          time: '2020-02-01 21:00',
          newsId: '5'
        },
        {
          img: news6,
          title: '富乐医疗荣获 HRM Asia 最佳企业医疗服务奖',
          time: '2019-12-31 21:00',
          newsId: '6'
        },
        {
          img: news7,
          title: '富乐中国完成对环球医生多数股权的收购',
          time: '2019-09-16 17:15',
          newsId: '7'
        },
        {
          img: news8,
          title: '富乐医疗集团宣布引入平安资本重大投资',
          time: '2019-09-16 17:14',
          newsId: '8'
        },
        {
          img: news9,
          title: '助力健康中国 新加坡富乐集团加速拓展上海医疗市场',
          time: '2019-09-16 17:14',
          newsId: '9'
        },
        {
          img: news10,
          title: '携手共创亚太区领先健康管理平台 微医与富乐医疗签署战略合作',
          time: '2019-09-16 17:12',
          newsId: '10'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.news {
  .motionless-banner-title {
    p {
      color: #ffffff;
    }
  }
  .news-title {
    margin-top: 4.375rem;
    margin-bottom: 3.125rem;
    p:nth-of-type(1) {
      margin-bottom: 1.25rem;
    }
  }
}
</style>