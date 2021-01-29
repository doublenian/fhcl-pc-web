<template>
  <div class="clinic-detail">
    <SwiperBanner
      v-if="clinicDetail.bannerData.length > 1"
      :banner-data="clinicDetail.bannerData"
      banner-id="clinicDetail-banner"
    >
      <template v-slot:default="{ banner }">
        <div
          class="swiper-slider-img"
          :style="{ backgroundImage: 'url(' + banner.imageUrl + ')' }"
        ></div>
      </template>
    </SwiperBanner>
    <div
      v-if="(clinicDetail.bannerData.length = 1)"
      class="swiper-slider-img"
      :style="{
        backgroundImage: 'url(' + clinicDetail.bannerData[0].imageUrl + ')'
      }"
    ></div>
    <div>
      <div class="pc:relative responsive-container">
        <div ref="clinicName" class="clinic-name">
          <p
            style="margin-bottom:0.625rem;"
            class="text-font-50 font-semibold text-black-main"
          >
            {{ clinicDetail.Name }}
          </p>
          <p class="text-gray-main text-font-18">{{ clinicDetail.count }}</p>
        </div>
        <div
          ref="floatCard"
          id="float-card"
          class="pc:absolute pc:right-0 pc:top-0"
        >
          <div style="width:100%;height:100%" class="relative">
            <div ref="card" class="relation">
              <p
                style="margin-bottom:0.625rem"
                class="text-font-20 font-semibold text-black-main"
              >
                诊所地址
              </p>
              <p class="text-font-16 text-gray-main mb-5">
                {{ clinicDetail.address }}
              </p>
              <p
                style="margin-bottom:0.625rem"
                class="text-font-20 font-semibold text-black-main"
              >
                咨询电话
              </p>
              <p
                class="text-font-16 text-gray-main mb-5"
                v-html="clinicDetail.phone"
              ></p>
              <p
                style="margin-bottom:0.625rem"
                class="text-font-20 font-semibold text-black-main"
              >
                营业时间
              </p>
              <p
                class="text-font-16 text-gray-main mb-5"
                v-html="clinicDetail.businessTime"
              ></p>
              <div class="relative">
                <img :src="clinicDetail.qrCode" alt="" />
                <span
                  style="left:9.375rem;bottom:-0.5rem"
                  class="absolute bottom-0 text-font-16 text-black-main"
                  v-html="clinicDetail.qrCodeText"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="administrative"
        class="administrative clinic-detail-title responsive-container"
      >
        <p
          style="margin-bottom:1.625rem"
          class="title text-font-40 font-semibold"
        >
          科室介绍
        </p>
        <div class="administrative_content">
          <Administrative :dataList="clinicDetail.administrative">
          </Administrative>
        </div>
      </div>
      <div
        v-if="clinicDetail.outpatient.length !== 0"
        ref="outpatient"
        class="outpatient clinic-detail-title responsive-container"
      >
        <p class="title text-font-40 font-semibold">门诊部特色</p>
        <div class="outpatient_content">
          <outPatient :dataList="clinicDetail.outpatient"> </outPatient>
        </div>
      </div>
      <div class="clinic-detail-title">
        <p class="title text-font-40 font-semibold responsive-container">
          医生团队
        </p>
        <client-only placeholder="加载中...">
          <infinite-loading ref="infiniteLoading" :data="clinicDetail.doctor">
            <template v-slot:default="{ finiteData }">
              <div class="medical-team-count">
                <div
                  class="doctorTeam"
                  v-for="(item, index) in finiteData"
                  :key="index"
                >
                  <doctorListItem :doctorInfo="item"></doctorListItem>
                </div>
              </div>
            </template>
          </infinite-loading>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { clinicDetailList } from './data.js'
import doctorListItem from '@/pages/components/doctor-list-item'
import SwiperBanner from '@/components/swiper-banner'

import Administrative from './components/administrative'
import outPatient from './components/out-patient'
import infiniteLoading from '@/components/infinite-loading'

export default {
  components: {
    SwiperBanner,
    doctorListItem,
    Administrative,
    outPatient,
    infiniteLoading
  },
  data() {
    return {
      clinicDetailList,

      clinicDetail: {},
      scrollheight: null
    }
  },
  created() {
    this.clinicDetailList.forEach((item) => {
      if (item.id === this.$route.query.id) {
        this.clinicDetail = item
      }
    })
    //   this.clinicDetail =
  },
  mounted() {
    let that = this
    this.$nextTick(() => {
      setTimeout(function() {
        let a = that.$refs.clinicName.offsetHeight
        let b = that.$refs.administrative.offsetHeight
        let c = 0
        if (that.clinicDetail.outpatient.length !== 0) {
          c = that.$refs.outpatient.offsetHeight - 60
          if (that.$refs.outpatient.offsetHeight === 0) {
            c = 0
          }
        } else {
          c = 0
        }

        that.scrollheight = a + b + c
      }, 500)
    })

    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll(e) {
      if (this.scrollheight) {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        let num = parseInt(scrollTop)
        if (num - 438 >= this.scrollheight - this.$refs.card.offsetHeight) {
          num = this.scrollheight - this.$refs.card.offsetHeight + 438
        }
        if (num > 438) {
          this.$refs.card.style.top = num - 438 + 'px'
        }
        if (num < 438) {
          this.$refs.card.style.top = 0 + 'px'
        }
      }
    }
  },
  destroyed() {
    console.log('关闭')
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>
<style lang='less'>
.clinic-detail {
  padding-top: 82px;
  padding-bottom: 6.25rem;
  .clinic-name {
    margin-top: 4.375rem;
    p:nth-of-type(1) {
      margin-bottom: 1.25rem;
    }
  }
  .relation {
    padding: 1.875rem;
    background: #f1f2f6;
    img {
      width: 8.125rem;
    }
  }

  .administrative {
    margin-top: 1.875rem;
  }
  .clinic-detail-title {
    padding-top: 6.25rem;
    margin-top: 0;
    .title {
      margin-bottom: 3.125rem;
    }
  }
}
@screen h5 {
  .clinic-detail {
    .clinic-name {
      width: 100%;
      p {
        margin-bottom: 1.25rem;
      }
    }
    .doctorTeam {
      width: 100%;
      margin: 0 0 1.5rem 0;
    }
    .relation {
      width: 100%;
    }
    .medical-team-count {
      // width: 100vw;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    #float-card {
      width: 100%;
      // width: auto;
      // height: calc();
    }
  }
  .swiper-slider-img {
    height: 108px;
    background-size: cover;
    background-position: center;
  }
}
@screen pc {
  .clinic-detail {
    .clinic-name {
      width: 792px;
      p:nth-of-type(2) {
        margin-bottom: 0;
      }
    }
    .doctorTeam {
      margin-bottom: 1.5rem;
    }
    .relation {
      position: absolute;
      width: 384px;
    }
    .medical-team-count {
      display: block;
      .doctorTeam {
        width: 24rem;
        float: left;
        margin-right: 24px;
      }
      .doctorTeam:nth-of-type(3n) {
        margin-right: 0;
      }
    }
    #float-card {
      width: 384px;
    }
    .swiper-slider-img {
      height: 438px;
    }
  }
}
</style>