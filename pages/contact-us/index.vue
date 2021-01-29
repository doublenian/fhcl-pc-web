<template>
  <div class="contact">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div
      style="margin-top:4.375rem;margin-bottom:1.875rem;"
      class="responsive-container join_fuller"
    >
      <p
        style="margin-bottom:1.875rem"
        class="text-font-50 text-black-main font-semibold "
      >
        联系信息
      </p>
      <div
        style="margin-bottom:1.25rem"
        class="text-font-20 text-gray-main  pc:flex pc:justify-start pc:items-center"
      >
        <div class="flex justify-start items-center">
          <img
            class="icon"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/contact/icon_location.png"
            alt=""
          />
          <p>地址：</p>
        </div>

        上海市静安区南京西路1601号越洋国际广场18楼1802室
      </div>
      <div
        class="text-font-20 text-gray-main pc:flex pc:justify-start pc:items-center"
      >
        <div class="flex justify-start items-center">
          <img
            class="icon"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/contact/icon_Email.png"
            alt=""
          />
          <p>商务合作：</p>
        </div>

        <span class="text-primary">marketing.china@fullertonhealth.com</span>
      </div>
    </div>
    <div class="contact_qrCode responsive-container text-center">
      <div>
        <img :src="qrCode" alt="" />
        <p>新浪微博</p>
      </div>
      <div>
        <img :src="qrCode" alt="" />
        <p>
          富乐医疗中国官方<br />
          微信公众号二维码
        </p>
      </div>
    </div>
    <div
      style="margin-top:3.75rem;margin-bottom:6.25rem;"
      class="responsive-container join_fuller"
    >
      <p
        style="margin-bottom:1.875rem"
        class="text-font-50 text-black-main font-semibold"
      >
        加入富乐
      </p>
      <div
        style="margin-bottom:1.25rem"
        class="text-font-20 text-gray-main pc:flex pc:justify-start pc:items-center"
      >
        <div class="flex justify-start items-center">
          <img
            class="icon"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/contact/icon_Email.png"
            alt=""
          />
          <p>简历投递招聘：</p>
        </div>

        <span class="text-primary">china.recruitment@fullertonhealth.com</span>
      </div>
      <div class="text-font-20 text-gray-main flex justify-start items-center">
        <img
          class="icon"
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/contact/icon_link.png"
          alt=""
        />
        <span> 链接招聘：</span>
        <a href="https://jobs.51job.com/yx/co5065450.html">
          <img
            class="img1"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/contact/Logo_51.png"
            alt=""
        /></a>
        <a href="https://www.jobmd.cn/company/3557116.htm">
          <img
            class="img2"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/contact/Logo_dingx.png"
            alt=""
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
import motionlessBanner from '@/components/motionless-banner'
import qrCode from '@/assets/images/qr_code.png'
export default {
  data() {
    return {
      qrCode,
      banner: [
        {
          title: '联系我们',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/contackUs-banner.jpg',
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
.contact {
  .motionless-banner-title {
    p {
      color: #ffffff;
    }
  }
  .banner-swiper-image {
    background-position: bottom;
  }
  .contact_qrCode {
    div {
      padding: 1.25rem 2.5rem;
    }
  }
  .join_fuller {
    .img1 {
      // margin-left: 2.25rem;
      width: 5.3125rem;
    }
    .img2 {
      margin-left: 1.875rem;
      width: 7.5625rem;
    }
    .icon {
      width: 1rem;
      height: 1rem;
      margin-right: 0.625rem;
    }
  }
}
@screen h5 {
  .contact {
    .contact_qrCode {
      display: flex;
      justify-content: space-between;
      div {
        width: 46%;
        border: 1px solid rgba(238, 240, 242, 1);
        img {
          width: 100%;
          margin-bottom: 0.625rem;
        }
      }
    }
  }
}
@screen pc {
  .contact {
    .contact_qrCode {
      display: flex;
      justify-content: left;
      div {
        width: 282px;
        height: 294px;
        margin-right: 1.5rem;
        border: 1px solid rgba(238, 240, 242, 1);
        img {
          width: 100%;
          margin-bottom: 0.625rem;
        }
      }
    }
  }
}
</style>