<template>
  <div class="package-detail responsive-container">
    <div style="padding-top:82px;">
      <div
        class="package-banner"
        :style="{ backgroundImage: 'url(' + packageDetail.banner[0].img + ')' }"
      ></div>
      <!-- <motionlessBanner
        :banner="packageDetail.banner"
        type="img"
      ></motionlessBanner> -->
    </div>

    <div class="packageDetail-countent flex justify-between flex-wrap">
      <div class="packageDetail-explain">
        <div
          class="packageDetail-title text-font-50 text-black-main font-semibold"
        >
          {{ packageDetail.title }}
        </div>
        <div
          class="packageDetail-explain-title text-font-20 text-gray-main font-semibold"
        >
          本套餐包括
        </div>
        <div
          style="margin-bottom:0.175rem;"
          class="text-font-16 text-gray-main"
          v-for="(item, index) in packageDetail.content"
          :key="'content' + index"
        >
          <span>{{ item.title }}</span> <span>{{ item.count }}</span>
        </div>

        <div
          style="margin-top:2.5rem"
          class="packageDetail-explain-title text-font-20 text-gray-main font-semibold"
        >
          使用说明
        </div>
        <p
          v-html="packageDetail.hint"
          style="color:#F7B500"
          class="text-font-16"
        ></p>
        <div
          style="margin-bottom:0.175rem"
          class="text-font-16 text-gray-main flex justify-start"
          v-for="(item, index) in packageDetail.explain"
          :key="'explain' + index"
        >
          <p>{{ item.title }}</p>
          <p v-html="item.count"></p>
        </div>
        <div
          v-if="packageDetail.qrCode"
          class="package-alert h5:hidden pc:block"
        >
          <div class="package-alert-title">
            套餐购买
          </div>
          <div class="package-alert-content">
            <img :src="packageDetail.qrCode" alt="" />
            <p style="margin-top:10px;" class=" text-font-20 text-black-main">
              扫描二维码<br />进行购买
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'

import { packageDetailList } from './data.js'
export default {
  components: {
    motionlessBanner
  },
  data() {
    return {
      show: false,
      packageDetailList,
      packageDetail: {}
    }
  },
  created() {
    this.packageDetailList.forEach((item, index) => {
      if (item.packageId === this.$route.query.id) {
        this.packageDetail = item
      }
    })
  },
  mounted() {
    console.log('djklfsjdklf')
    if (!this.packageDetail.qrCode) {
      document.querySelector('.plantobuy').style.height = '0px'
      document.querySelector('.plantobuy').style.overflow = 'hidden'
      document.querySelector('.plantobuy').style.padding = '0px'
      document.querySelector('.plantobuy-bottom').style.height = '0px'
      document.querySelector('.plantobuy-bottom').style.overflow = 'hidden'
    } else {
      document.querySelector('.plantobuy').style = null
      document.querySelector('.plantobuy-bottom').style = null
    }
  },
  methods: {}
}
</script>
<style lang="less">
.package-detail {
  padding-bottom: 6.25rem;
  .packageDetail-title {
    margin-top: 4.375rem;
    margin-bottom: 1.875rem;
  }
  .packageDetail-explain-title {
    margin-bottom: 1.675rem;
  }
  .packageDetail-countent {
    position: relative;
    .package-purchase {
      margin-top: 4.375rem;
      width: 17.625rem;
      text-align: center;
      .package-purchase-title {
        height: 3.875rem;
        color: #fff;
        background: #0d7dfc;
        line-height: 3.875rem;
      }
      .package-purchase-count {
        height: 18.5rem;
        background: #f1f2f6;
        padding: 1.25rem 3.125rem;
        img {
          width: 11.25rem;
          margin-bottom: 0.625rem;
        }
      }
    }
  }
  .package-alert {
    position: absolute;
    top: 80px;
    right: 0;
    width: 282px;
    .package-alert-title {
      background: #0d7dfc;
      height: 62px;
      text-align: center;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      font-size: 30px;
      line-height: 62px;
    }
    .package-alert-content {
      padding: 20px 50px 30px 50px;
      background: #f1f2f6;
      text-align: center;
    }
  }
}

@screen h5 {
  .package-detail ~ .layout-footer .plantobuy {
    display: block !important;
  }
  .package-detail ~ .layout-footer .plantobuy-bottom {
    display: block !important;
  }
  .package-detail {
    .package-banner {
      height: 108px;
      background-size: cover;
      background-position: center;
    }
  }
}
@screen pc {
  .package-detail ~ .layout-footer .plantobuy {
    display: none !important;
  }
  .package-detail ~ .layout-footer .plantobuy-bottom {
    display: none !important;
  }
  .package-detail {
    .package-banner {
      height: 471px;
    }
  }
}
</style>