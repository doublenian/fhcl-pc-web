<template>
  <div class="global-award">
    <div class="responsive-container text-center">
      <p
        class=" text-black-main pc:text-font-50 h5:text-font-32 font-bold pc:text-center h5:text-left"
      >
        奖项和荣誉
      </p>
      <div class="global-award-desc text-gray-main text-font-18 mt-10">
        富乐医疗凭借丰富的临床与管理经验，与超过10,000多家知名企业合作，每年为数百万患者提供医疗服务，富乐医疗成为了亚太地区广受企业信赖的医疗服务供应商。
      </div>
      <div class="global-award-body pc:flex flex-wrap mx-auto h5:block">
        <div
          class="award-item"
          v-for="(item, index) in awardList"
          :key="'award' + index"
        >
          <div class="bg-image-wrapper">
            <div
              class="bg-image bg-cover bg-center bg-no-repeat"
              :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
            ></div>
          </div>
          <div class="award-desc text-left">
            <p class=" text-font-20 text-primary font-bold">{{ item.title }}</p>
            <div class=" text-font-16 text-primary" v-html="item.enTitle"></div>
            <div class=" text-font-16 text-gray-main" v-if="item.desc">
              <p
                v-for="(desc, subIndex) in item.desc.split(';')"
                :key="index + 'sub' + subIndex"
              >
                {{ desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awardList: [
        {
          title: '亚洲医疗大奖',
          enTitle: 'Healthcare Asia Awards',
          desc:
            '最佳初级保健服务供应商(2019, 2018);最佳设施改善创新奖(2018);最佳患者服务创新奖(2018)',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/award1.png'
        },
        {
          title: '年度最佳人力资源供应商奖',
          enTitle: 'HR Vendors of the Year Award',
          desc:
            '最佳企业医疗服务供应商;最佳企业健康检查服务供应商;(2019, 2018, 2017, 2016, 2015)',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/award2.png'
        },
        {
          title: 'HRM读者选择奖',
          enTitle: `HRM Readers' Choice`,
          desc:
            '最佳企业医疗服务供应商;最佳企业健康检查服务供应商;(2019, 2018, 2016)',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/award3.png'
        },
        {
          title: '弗若斯特沙利文奖',
          enTitle: `Frost & Sullivan <br>Best Practices Award`,
          desc:
            '最佳企业健康管理奖(2017);最佳影像诊断公司(2016);初级保健卓越领导力奖(2015)',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/award4.png'
        },
        {
          title: '超级品牌奖(2018)',
          enTitle: `Superbrands`,
          desc: '',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/award5.png'
        },
        {
          title: '安永企业家奖(2015)',
          enTitle: `Ernst & Young EY.<br>
Entrepreneur of the Year`,
          desc:
            '最佳企业医疗服务供应商;最佳企业健康检查服务供应商;(2019, 2018, 2016)',
          imageUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/award6.png'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.global-award {
  background-color: #f1f2f6;
  padding: 4rem 0;
  .global-award-body {
    .award-item {
      .bg-image-wrapper {
        border: 1px solid rgba(238, 240, 242, 1);
      }
      .award-desc {
        margin-right: 0px;
        p {
          margin-top: 10px;
        }
      }
    }
  }
}
@screen h5 {
  .global-award {
    .global-award-desc {
      width: 100%;
      text-align: left;
    }
    .award-item {
      margin-top: 30px;
      .bg-image {
        width: 100%;
        height: 190px;
      }
      .award-desc {
        padding-top: 0.5rem;
        font-weight: bold;
        height: auto;
      }
    }
  }
}
@screen pc {
  .global-award {
    .global-award-desc {
      width: 29.25rem;
      @apply mx-auto  text-center;
    }
    .award-item {
      margin: 1.875rem 24px 0 0;
      .bg-image-wrapper {
        width: 282px;
      }
      .bg-image {
        width: 282px;
        height: 10rem;
      }
      .award-desc {
        padding-top: 1.5rem;
        height: 11.625rem;
        font-weight: 400;
      }
    }
    .award-item:nth-of-type(4n) {
      margin-right: 0px;
    }
  }
}
</style>