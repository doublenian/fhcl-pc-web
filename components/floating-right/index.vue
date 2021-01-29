<template>
  <div class="floating bg-white">
    <el-popover placement="left" trigger="hover">
      <div class="qrcode">
        <img src="@/assets/images/qr_code.png" alt="" />
        <p
          style="margin-top:0.625rem"
          class=" text-font-14 text-center text-gray-main"
        >
          微信扫描<br />小程序二维码
        </p>
      </div>
      <div class="floating_logo" slot="reference">
        <div class="image-xcx image bg-cover bg-center"></div>
        <p class=" h5:hidden pc:block">微信<br />小程序</p>
      </div>
    </el-popover>
    <el-popover placement="left" trigger="hover">
      <div class="qrcode">
        <img src="@/assets/images/qr_code.png" alt="" />
        <p
          style="margin-top:0.625rem;"
          class=" text-font-14 text-center text-gray-main"
        >
          微信扫描<br />公众号二维码
        </p>
      </div>
      <div class="floating_logo" slot="reference">
        <div class="image-gzh image bg-cover bg-center"></div>
        <p class=" h5:hidden pc:block">微信<br />公众号</p>
      </div>
    </el-popover>
    <el-popover placement="left" trigger="hover">
      <div class="qrcode">
        <img src="@/assets/images/weibo_qr.png" alt="" />
        <p
          style="margin-top:0.625rem;"
          class=" text-font-14 text-center text-gray-main"
        >
          手机扫描<br />新浪微博二维码
        </p>
      </div>
      <div
        style="border:none"
        class="border-none floating_logo "
        slot="reference"
      >
        <div class="image-wb image bg-cover bg-center"></div>
        <p class=" h5:hidden pc:block">新浪<br />微博</p>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appletWeChat: false,
      weChat: false,
      microblog: false
    }
  },
  methods: {
    clickIcon(id) {
      if (id === 'appletWeChat') {
        this.appletWeChat = !this.appletWeChat
        this.weChat = false
        this.microblog = false
      } else if (id === 'weChat') {
        this.weChat = !this.weChat
        this.appletWeChat = false
        this.microblog = false
      } else if (id === 'microblog') {
        this.microblog = !this.microblog
        this.appletWeChat = false
        this.weChat = false
      }
    }
  }
}
</script>
<style lang="less">
.qrcode {
  width: 11.875rem !important;
  // height: 6rem !important;
  padding: 1.25rem;
  img {
    width: 100%;
    // height: 100%;
  }
}
.floating {
  position: fixed;
  padding: 0.625rem 0;
  border: 1px solid rgba(238, 240, 242, 1);
  border-radius: 0.625rem;
  box-shadow: 0px 10px 10px -13px rgba(0, 7, 42, 0.3);
  z-index: 100;

  .floating_logo {
    cursor: pointer;
    border-bottom: 1px solid #eef0f2;
    .image-xcx {
      background-image: url('~assets/images/service/applet_weChat.png');
    }
    .image-gzh {
      background-image: url('~assets/images/service/wechat.png');
    }
    .image-wb {
      background-image: url('~assets/images/service/microblog.png');
    }
    &:hover {
      .image-xcx {
        background-image: url('~assets/images/service/applet_weChat_click.png');
      }
      .image-gzh {
        background-image: url('~assets/images/service/wechat_click.png');
      }
      .image-wb {
        background-image: url('~assets/images/service/microblog_click.png');
      }
      p {
        @apply text-primary;
      }
    }

    p {
      @apply text-font-12;
      @apply text-black-main;
      text-align: center;
    }
  }
}
@screen h5 {
  .floating {
    bottom: 2rem;
    right: 0.625rem;
    .floating_logo {
      padding: 0.9375rem 0;
      margin: 0 0.9375rem;
      .image {
        width: 2.5rem;
        height: 2.5rem;
      }
      p {
        width: 2.5rem;
      }
    }
  }
}
@screen pc {
  .floating {
    bottom: 2rem;
    right: 0.625rem;
    .floating_logo {
      padding: 0.625rem 0;
      margin: 0 0.9375rem;
      .image {
        width: 2.5rem;
        height: 2.5rem;
      }

      p {
        width: 2.5rem;
      }
    }
  }
}
</style>