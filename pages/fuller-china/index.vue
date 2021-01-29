<template>
  <div class="fuller-china">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div
      class="map-china responsive-container flex flex-wrap justify-between align-items-center"
    >
      <div>
        <img
          src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-china/map-china.png"
          alt=""
        />
      </div>

      <div class="text">
        <p class="text-font-50 text-black-main font-semibold">关于富乐中国</p>
        <p class="text-font-18 text-gray-main">
          富乐医疗中国拥有超过20年开设和运营连锁医疗机构的成功经验，目前在10余个城市开设了30多家诊所。
        </p>
        <p class="text-font-18 text-gray-main">
          富乐医疗中国始终致力于提升医疗服务品质，恪守以患者安全为中心的准则，以高于行业标准的要求来保障医疗服务质量。专业的医疗团队，直接提供医疗服务及专家团队的技术支持，为客户提供便捷、优质且价格合理的医疗健康服务。
        </p>
      </div>
    </div>
    <div style="margin-top:5.625rem" class="relative">
      <div class="wish_bg"></div>
      <!-- <img
        style="width:100%"
        src="https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/yuanjing.jpg"
        alt=""
      /> -->
      <div class="ours-wish absolute">
        <div>
          <p class=" text-white font-semibold">我们的愿景</p>
          <p class="text-white ">
            为亚太区每个人提供便捷、优质且价格合理的医疗健康服务。
          </p>
        </div>
      </div>
    </div>
    <div class="fuller-value responsive-container">
      <p class="fuller-value-title text-font-50 font-semibold text-black-main">
        我们的价值观
      </p>
      <div class="fuller-value-content">
        <div v-for="(item, index) in valueList" :key="index">
          <img :src="item.img" alt="" />
          <p
            style="margin-bottom:0.625rem"
            class="text-font-20 text-black-main"
          >
            {{ item.title }}
          </p>
          <p class="text-font-16 text-gray-main">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'
// import banner from '@/assets/images/fuller-china/banner.png'
const values1 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-china/values1.png'
const values2 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-china/values2.png'
const values3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-china/values3.png'
const values4 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-china/values4.png'
const values5 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-china/values5.png'
export default {
  components: {
    motionlessBanner
  },
  data() {
    return {
      banner: [
        {
          title: '富乐中国',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/fuller-china-banner.jpg',
          url: ''
        }
      ],
      valueList: [
        {
          img: values1,
          title: '共情同理',
          content: '患者导向，关怀用心'
        },
        {
          img: values2,
          title: '团队合作',
          content: '重视培养，共创卓越'
        },
        {
          img: values3,
          title: '合作关系',
          content: '长期合作，携手共进'
        },
        {
          img: values4,
          title: '创新改变',
          content: '勇于创新，拥抱改变'
        },
        {
          img: values5,
          title: '正直守心',
          content: '坚持初心，知行合一'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.fuller-china {
  .wish_bg {
    width: 100%;
    height: 286px;
    background-image: url('https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/yuanjing.jpg?imageMogr2/scrop/1200x200');
    // background: rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
  }
  .banner-swiper-image {
    background-size: cover;
    background-position: top !important;
  }
  .motionless-banner-title {
    p {
      // color: #ffffff;
    }
  }
  .map-china {
    margin-top: 6.25rem;
    .text {
      padding-top: 4.31rem;
      p {
        margin-bottom: 1.875rem;
      }
      p:nth-last-child(1) {
        margin: 0;
      }
    }
  }
  .ours-wish {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: rgba(0, 0, 0, 0.5);

    p {
      width: 100vw;
      padding: 0 20px;
      // margin-bottom: 1.875rem;
    }
  }
  .fuller-value {
    text-align: center;
    margin-top: 6.25rem;
    margin-bottom: 5rem;
    .fuller-value-title {
      margin-bottom: 6.25rem;
    }
  }
  .fuller-value-content {
    padding: 1.5rem;
    div {
      padding-bottom: 1.25rem;
    }
    img {
      margin-bottom: 1.25rem;
    }
  }
}
@screen h5 {
  .fuller-china {
    .wish_bg {
      height: 100px;
    }
    .map-china {
      margin-top: 6.25rem;
      img {
        width: 100%;
      }
      .text {
        width: 486px;
      }
    }
    .ours-wish {
      padding-top: 30px;
      p:nth-of-type(1) {
        font-size: 14px;
        margin-bottom: 0.5rem;
      }
      p:nth-of-type(2) {
        font-size: 12px;
      }
    }
    .fuller-value-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 35%;
      }
    }
  }
}
@screen pc {
  .fuller-china {
    .wish_bg {
      height: 286px;
    }
    .map-china {
      img {
        width: 639px;
      }
      .text {
        width: 486px;
      }
    }
    .ours-wish {
      padding-top: 70px;
      p:nth-of-type(1) {
        font-size: 50px;
        margin-bottom: 30px;
      }
      p:nth-of-type(2) {
        font-size: 18px;
      }
    }
    .fuller-value-content {
      overflow: hidden;
      display: block;
      div {
        width: 9.375rem;
        float: left;
        margin-right: 100px;
      }
      div:nth-of-type(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>