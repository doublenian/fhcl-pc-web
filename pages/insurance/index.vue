<template>
  <div class="insurance">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div class="insurance_content responsive-container">
      <p
        style="margin-bottom:0.625rem"
        class="text-font-40 text-black-main font-semibold"
      >
        保险直付
      </p>
      <p class="text-font-18 text-gray-main">
        富乐医疗接受国内外保险公司提供的医疗保险服务，客户就诊后的医疗费用将由我们和保险公司直接结算，我们将与更多保险公司持续开展相关合作，为客户打造便捷、高效的就医体验。
      </p>
    </div>
    <div class="insurance-img responsive-container">
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance1.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance2.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance3.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance4.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance5.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance6.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance7.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance8.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance9.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance10.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/insurance/insurance11.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// import banner from '@/assets/images/insurance/banner.png'
import motionlessBanner from '@/components/motionless-banner'
export default {
  data() {
    return {
      banner: [
        {
          title: '保险直付',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/insurance-banner.jpg',
          url: ''
        }
      ]
    }
  },
  components: {
    motionlessBanner
  }
}
</script>

<style lang="less">
.insurance {
  padding-bottom: 4.75rem;
  .motionless-banner-title {
    p {
      // color: #ffffff;
    }
  }
  .insurance_content {
    margin-top: 3.75rem;
    margin-bottom: 3.125rem;
    text-align: center;
  }
  .insurance-img {
    overflow: hidden;
    div {
      margin-bottom: 1.5rem;
    }
  }
}
@screen h5 {
  .insurance {
    .insurance_content {
      width: 100%;
    }
    .insurance-img {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 46%;
      }
    }
  }
}
@screen pc {
  .insurance {
    .insurance_content {
      width: 588px;
    }
    .insurance-img {
      display: block;
      div {
        float: left;
        margin-right: 24px;
        width: 17.625rem;
      }
      div:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>