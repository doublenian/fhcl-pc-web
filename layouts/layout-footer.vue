<template>
  <div class="layout-footer bg-gray-bg w-full">
    <div
      class="layout-footer-content pc:flex pc:justify-between responsive-container"
    >
      <div class="w-full pc:w-1/2 pt-12  h5:hidden pc:block">
        <div class="text-gray-main text-font-14 mb-5">关于我们</div>
        <div
          class="foooter-about flex h5:flex-col pc:flex-row pc:justify-between pc:w-64 text-black-main"
        >
          <div class="flex flex-col">
            <div
              class="cursor-pointer link-block"
              @click="$router.push({ path: '/news' })"
            >
              <span>新闻及活动</span>
            </div>
            <div
              class="cursor-pointer link-block"
              @click="$router.push({ path: '/contact-us' })"
            >
              <span>联系我们</span>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="cursor-pointer link-block"
              @click="$router.push({ path: '/fuller-global' })"
            >
              <span>富乐全球</span>
            </div>
            <div
              class="cursor-pointer link-block"
              @click="$router.push({ path: '/fuller-china' })"
            >
              <span>富乐中国</span>
            </div>
            <div
              class="cursor-pointer link-block"
              @click="$router.push({ path: '/insurance' })"
            >
              <span>保险直付</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pc:w-1/2 pt-12">
        <div class="footer-logo text-gray-main text-font-14 flex justify-end">
          <img
            class="fullerLogo pc:m-0 h5:m-auto cursor-pointer"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/fullerLogo.png"
            alt=""
            @click="$router.push({ path: '/' })"
          />
        </div>
        <div class="w-full pc:w-1/2 h5:block pc:hidden">
          <div class="text-gray-main text-font-14 mb-5">关于我们</div>
          <div
            class="foooter-about flex h5:flex-col pc:flex-row pc:justify-between pc:w-64 text-black-main"
          >
            <div>
              <p @click="$router.push({ path: '/news' })" class="mb-2">
                新闻及活动
              </p>
              <p @click="$router.push({ path: '/contact-us' })" class="mb-2">
                联系我们
              </p>
            </div>
            <div>
              <p @click="$router.push({ path: '/fuller-global' })" class="mb-2">
                富乐全球
              </p>
              <p @click="$router.push({ path: '/fuller-china' })" class="mb-2">
                富乐中国
              </p>
              <p @click="$router.push({ path: '/insurance' })" class="mb-2">
                保险直付
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="fotter-platform pc:flex pc:justify-start h5:block">
            <div class="fotter-platform-div">
              <el-popover placement="top" trigger="hover">
                <img
                  src="@/assets/images/qr_code.png"
                  class=" w-40 h-40"
                  alt=""
                />
                <p
                  style="margin-top:0.625rem"
                  class=" text-font-14 text-center text-gray-main"
                >
                  微信扫描<br />小程序二维码
                </p>
                <img
                  slot="reference"
                  style="width:2.18rem;height:2.18rem;"
                  src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/footer_wechat.png"
                  alt=""
                />
              </el-popover>
              <img
                style="width:2.5rem;height:2.5rem"
                src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/footer_weibo.png"
                alt=""
                @click="gotoLink('weibo')"
              />
              <img
                style="width:2.5rem;height:2.5rem"
                class=" cursor-pointer"
                @click="gotoLink('linkin')"
                src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/footer_linkedin.png"
                alt=""
              />
              <img
                style="width:3.375rem;height:2.5rem"
                src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/footer_souhu.png"
                alt=""
              />
            </div>
            <div class="fotter-platform-div">
              <img
                style="width:4.25rem;height:2.5rem"
                src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/footer_jinri.png"
                alt=""
              />
              <img
                style="width:4.2rem;height:2rem; margin:0;"
                src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/icon_xiaohongshu.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright w-full">
      <div
        class="responsive-container pc:flex pc:justify-between text-gray-main"
      >
        <a
          class="h5:text-center pc:text-left block text-primary"
          href="http://www.beian.miit.gov.cn/"
          >沪ICP备19018074号-2</a
        >
        <p class="h5:text-center pc:text-left">
          ©富乐康医疗技术服务（上海）有限公司版权所有。
        </p>
        <!-- <p class="h5:text-center pc:text-left h5:block pc:hidden">
          ©富乐康医疗技术服务（上海）有限公司版权所有。
        </p> -->
        <div class="flex justify-center items-center text-center">
          <img
            style="margin-right:10px;"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/footer-icon.png"
            alt=""
          />
          <a
            class="h5:text-center pc:text-left block"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602004619"
          >
            沪公网安备 31010602004619号
          </a>
        </div>
      </div>
    </div>
    <div style="height:78px;" class="plantobuy-bottom"></div>
    <div ref="plantobuy" class="plantobuy bg-white">
      <p @click="show = true" class="text-font-16 font-semibold">
        套餐购买
      </p>
    </div>

    <div v-if="show" class="package-alert h5:block pc:hidden">
      <div class="detail">
        <div class="package-alert-title">
          套餐购买
          <img
            @click="show = false"
            src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/footer/icon_gb.png"
            alt=""
          />
        </div>
        <div class="package-alert-content">
          <img :src="packageDetail.qrCode" alt="" />
          <p>扫描二维码<br />进行购买</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { packageDetailList } from '@/pages/package/detail/data.js'
export default {
  data() {
    return {
      show: false,
      packageDetailList,
      packageDetail: {},
      bottomLink: {
        linkin: 'https://www.linkedin.com/company/富乐医疗中国',
        weibo: 'https://weibo.com/p/1006067326748652/home'
      }
    }
  },
  created() {
    this.packageDetailList.forEach((item, index) => {
      if (item.packageId === this.$route.query.id) {
        this.packageDetail = item
      }
    })
  },
  methods: {
    gotoLink(name) {
      window.open(this.bottomLink[name], '_blank')
    }
  }
}
</script>

<style lang="less">
.layout-footer {
  .plantobuy-bottom {
    display: none;
  }
  .foooter-about {
    .link-block {
      display: inline;
      margin-bottom: 0.625rem;
      span {
        padding-bottom: 4px;
      }
      span {
        &:hover {
          border-bottom: 1px solid theme('colors.black-main');
        }
      }
    }
  }
  .fullerLogo {
    width: 16.25rem;
    height: 3.75rem;
  }
  .footer-copyright {
    border-top: 1px solid #eef0f2;
    padding: 1.25rem 0;
    p {
    }
  }
  .plantobuy {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: none;
    height: 78px;
    padding: 0.75rem 1.25rem;
    p {
      width: 100%;
      height: 54px;
      background: #0d7dfc;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      line-height: 54px;
    }
  }
  .footer-platform-hover {
    position: relative;
    div {
      display: none;
      position: absolute;
      bottom: 50px;
      width: 11.875rem;
      background: #ffffff;
      transform: translate(-50%, 0);
      padding: 1.25rem 0;
      box-shadow: 0px 5px 20px -10px rgba(115, 121, 141, 0.5);
      border-radius: 10px;
      border: 1px solid rgba(238, 240, 242, 1);
      img {
        width: 9.375rem;
        height: 9.375rem;
        margin: 0 auto;
      }
    }
  }
  .package-alert {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.5);
    .detail {
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
      width: 281px;
      .package-alert-title {
        text-align: center;
        width: 100%;
        background: #0d7dfc;
        color: #ffffff;
        height: 52px;
        line-height: 52px;
        font-size: 24px;
        font-weight: 600;
        position: relative;
        img {
          width: 24px;
          height: 24px;
          display: inline-block;
          position: absolute;
          right: 16px;
          top: 14px;
        }
      }
      .package-alert-content {
        width: 100%;
        height: 274px;
        background: #f1f2f6;
        padding: 30px 61px;
        img {
          width: 160px;
          height: 160px;
          margin: 0 auto;
        }
        p {
          text-align: center;
          font-size: 16px;
          color: #00072a;
          margin-top: 10px;
        }
      }
    }
    // img {
    //   width: 11.25rem;
    //   margin: 0 auto;
    //   position: relative;
    //   top: 50%;
    //   transform: translate(0, -50%);
    // }
  }
}
@screen h5 {
  .footer-logo {
    border-bottom: 1px solid #eef0f2;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .fotter-platform {
    width: 100%;
    border-top: 1px solid #eef0f2;
    padding: 1.25rem 0;
    margin-top: 1.875rem;

    div {
      margin: 0 auto;
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    div:nth-of-type(2) {
      width: 40%;
      margin-top: 1.375rem;
    }
  }
}
@screen pc {
  .fotter-platform {
    width: auto;
    padding: 0;
    margin-top: 0;
    border: 0;

    div {
      margin: 0;
      width: auto;
      display: flex;
      justify-content: left;

      img {
        max-width: auto;
        margin-right: 20px;
      }
    }
    div:nth-of-type(2) {
      width: 40%;
      margin-top: 0;
      margin-right: -4px;
    }
    .layout-footer-content {
      width: 1200px;
    }
    .footer-copyright {
      div {
        width: 1200px;
      }
    }
    .footer-wechat:hover + div {
      display: block !important;
    }
  }
  .footer-logo {
    border-bottom: none !important;
    margin: 0;
    padding: 0;
    padding-bottom: 30px;
  }
}
</style>
