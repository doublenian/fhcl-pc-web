<template>
  <div class="fuller-global-content">
    <motionless-banner :banner="banner" type="bannerImg"></motionless-banner>
    <div class="responsive-container ">
      <div class="about-fuller ">
        <div class="about-desc">
          <p class=" text-black-main pc:text-font-50 h5:text-font-32 font-bold">
            关于富乐全球
          </p>
          <div class=" text-gray-main text-font-18 mt-10">
            <p>
              富乐医疗2010年成立于新加坡，是亚太区领先的垂直整合医疗健康平台。业务目前已覆盖新加坡、印度尼西亚、马来西亚、菲律宾、澳大利亚、新西兰、巴布亚新几内亚、中国和中国香港。富乐医疗凭借这些资源优势为亚太区客户提供便捷、优质且价格合理的医疗健康服务。
            </p>

            <p class="mt-5">
              富乐医疗在亚太区拥有广泛的网络，超过50年的服务经验，525家自营医疗中心，11,800多个医疗网络合作伙伴，1,320万服务客户，350多万就诊患者及1,450万年均就诊人次。
            </p>
          </div>
        </div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/img_globalhealth_about.jpg?imageMogr2/thumbnail/!80p"
          alt=""
          class="about-bg"
        />
      </div>
    </div>

    <global-timeline></global-timeline>
    <global-map class="h5:hidden pc:block"></global-map>
    <global-map-mb class="h5:block pc:hidden"></global-map-mb>
    <our-client></our-client>
    <global-award></global-award>
  </div>
</template>

<script>
import GlobalMap from './components/global-map'
import GlobalMapMb from './components/global-map-mb'
import motionlessBanner from '@/components/motionless-banner'
import GlobalTimeline from './components/global-timeline'
import OurClient from './components/our-client'
import GlobalAward from './components/global-award'
export default {
  components: {
    GlobalMap,
    GlobalMapMb,
    motionlessBanner,
    GlobalTimeline,
    OurClient,
    GlobalAward
  },
  data() {
    return {
      banner: [
        {
          title: '富乐全球',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/global-banner.jpg',
          url: ''
        }
      ]
    }
  }
}
</script>

<style lang="less">
.fuller-global-content {
  .motionless-banner-title {
    p {
      color: #ffffff;
    }
  }
}
@screen h5 {
  .about-fuller {
    padding: 5rem 0;
    .about-desc {
      width: 100%;
    }
    .about-bg {
      margin-top: 30px;
      width: 100%;
      display: block;
    }
  }
}
@screen pc {
  .about-fuller {
    padding: 5rem 0;
    @apply flex justify-between items-center;
    .about-desc {
      width: 29.25rem;
    }
    .about-bg {
      width: 36.75rem;
      height: 35.25rem;
    }
  }
}
</style>