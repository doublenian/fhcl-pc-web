<template>
  <div class="our-client">
    <div class="responsive-container text-center">
      <p
        class=" text-black-main pc:text-font-50 h5:text-font-32 font-bold pc:text-center h5:text-left"
      >
        我们的客户
      </p>
      <div class="our-client-desc text-gray-main text-font-18 mt-10">
        富乐医疗凭借丰富的临床与管理经验，与超过10,000多家知名企业合作，每年为数百万患者提供医疗服务，富乐医疗成为了亚太地区广受企业信赖的医疗服务供应商。
      </div>
      <div class="our-client-body flex flex-wrap mx-auto ">
        <div
          class="item text-center"
          v-for="(item, index) in list"
          :key="'item' + index"
        >
          <div
            class=" mx-auto bg-center bg-contain icon-image"
            :style="{
              backgroundImage: 'url(' + item.iconUrl + ')'
            }"
          ></div>
          <p class=" text-black-main text-font-18 mt-2">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '银行与金融',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/1.%E9%93%B6%E8%A1%8C%E4%B8%8E%E9%87%91%E8%9E%8D.png'
        },
        {
          title: '教育',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/2.%E6%95%99%E8%82%B2.png'
        },
        {
          title: '能源，石油与天然气',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/3.%E8%83%BD%E6%BA%90%EF%BC%8C%E7%9F%B3%E6%B2%B9%E4%B8%8E%E5%A4%A9%E7%84%B6%E6%B0%94.png'
        },
        {
          title: '酒店与餐饮',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/4.%E9%85%92%E5%BA%97%E4%B8%8E%E9%A4%90%E9%A5%AE.png'
        },
        {
          title: '制药',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/5.%E5%88%B6%E8%8D%AF.png'
        },
        {
          title: '专业服务与咨询',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/6.%E4%B8%93%E4%B8%9A%E6%9C%8D%E5%8A%A1%E4%B8%8E%E5%92%A8%E8%AF%A2.png'
        },
        {
          title: '制造',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/7.%E5%88%B6%E9%80%A0.png'
        },
        {
          title: '传媒与音乐',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/8.%E4%BC%A0%E5%AA%92%E4%B8%8E%E9%9F%B3%E4%B9%90.png'
        },
        // {
        //   title: '传媒与音乐',
        //   iconUrl:
        //     'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/8.%E4%BC%A0%E5%AA%92%E4%B8%8E%E9%9F%B3%E4%B9%90.png'
        // },
        {
          title: '房地产',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/9.%E6%88%BF%E5%9C%B0%E4%BA%A7.png'
        },
        {
          title: '零售',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/10.%E9%9B%B6%E5%94%AE.png'
        },
        {
          title: '半导体',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/11.%E5%8D%8A%E5%AF%BC%E4%BD%93.png'
        },
        {
          title: '科技',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/12.%E7%A7%91%E6%8A%80.png'
        },
        {
          title: '交通与物流',
          iconUrl:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/fuller-global/client/13.%E4%BA%A4%E9%80%9A%E4%B8%8E%E7%89%A9%E6%B5%81.png'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.our-client {
  background-color: #f1f2f6;
  padding: 4rem 0;
  .our-client-body {
  }
}
@screen h5 {
  .our-client {
    .our-client-desc {
      width: 100%;
      text-align: left;
    }
    .our-client-body {
      .item {
        width: 33.3%;
        // margin-top: 40px;
        .icon-image {
          width: 6rem;
          height: 6rem;
        }
      }
    }
  }
}
@screen pc {
  .our-client {
    .our-client-desc {
      width: 29.25rem;
      @apply mx-auto mt-10 text-center;
    }
    .our-client-body {
      width: 900px;
      .item {
        width: 180px;
        margin-top: 40px;
        .icon-image {
          width: 6rem;
          height: 6rem;
        }
      }
    }
  }
}
</style>