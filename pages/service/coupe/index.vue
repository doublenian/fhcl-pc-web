<template>
  <div class="coupe">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div
      style="margin-top:4.375rem;margin-bottom:3.125rem;"
      class="responsive-container"
    >
      <p
        style="margin-bottom:1.25rem"
        class="text-font-50 text-black-main font-semibold"
      >
        健康知识库
      </p>
      <p class="text-font-18 text-gray-main">
        富乐医疗提供全方位、高品质的医疗套餐，为客户的健康保驾护航。
      </p>
    </div>
    <div class="coupe-contnet">
      <client-only placeholder="加载中...">
        <infinite-loading ref="infiniteLoading" :data="newsList">
          <template v-slot:default="{ finiteData }">
            <newsItem
              :newsList="finiteData"
              :label="true"
              type="coupe"
            ></newsItem>
          </template>
        </infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
import motionlessBanner from '@/components/motionless-banner'
// import banner from '@/assets/images/coupe/banner.png'
import newsItem from '@/pages/news/components/news-item'
import infiniteLoading from '@/components/infinite-loading'
const coupe1 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/01.jpg'
const coupe2 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/02.jpg'
const coupe3 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/03.jpg'
const coupe4 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/04.jpg'
const coupe5 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/05.jpg'
const coupe6 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/06.jpg'
const coupe7 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/07.jpg'
const coupe8 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/08.jpg'
const coupe9 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/09.jpg'
const coupe10 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/10.jpg'
const coupe11 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/11.jpg'
const coupe12 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/12.png'
const coupe13 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/13.png'
const coupe14 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/14.png'
const coupe15 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/15.png'
const coupe16 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/16.png'
const coupe17 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/17.png'
const coupe18 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/18.png'
const coupe19 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/19.png'
const coupe20 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/20.png'
const coupe21 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/21.png'
const coupe22 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/22.png'
const coupe23 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/23.png'
const coupe24 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/24.png'
const coupe25 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/25.png'
const coupe26 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/26.png'
const coupe27 =
  'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/coupe/27.png'

export default {
  data() {
    return {
      banner: [
        {
          title: '健康知识库',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/coupe-banner.jpg',
          url: ''
        }
      ],
      newsList: [
        {
          img: coupe1,
          title: '中医 | 颈椎病正在慢慢拖垮你…',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/CRaB3hMvqo2Fd6A7EG9y7A',
          label: ['颈椎病', '中医']
        },
        {
          img: coupe2,
          title: '疫苗 | 2020年宝宝疫苗怎么打？家长必看！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/eE-4VvcMXcKF0CmrrpxEYw',
          label: ['疫苗']
        },
        {
          img: coupe3,
          title: '饮食健康 | 饭桌上的这个举动，很多人都忽略了',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/AtDQ80yM6v7c4E_Mly-A8g',
          label: ['公筷', '饮食健康']
        },
        {
          img: coupe4,
          title: '高考倒计时 | 25天，家长如何助力孩子？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/waoL2Zm2FeHT3BHgDP0jkw',
          label: ['高考倒计时', '考前助力']
        },
        {
          img: coupe5,
          title: '泌尿健康 | 你每天都会做的事，竟有大危害！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/dZcwTuJA_QzOMT0Djk_yKA',
          label: ['泌尿健康日', '憋尿']
        },
        {
          img: coupe6,
          title: '爱眼日 | 如何守护这扇“心灵的窗户”？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/M3QjGO9QcoxKZevL5w7c0Q',
          label: ['爱眼日', '视力']
        },
        {
          img: coupe7,
          title: '复学第一课 | 这些注意事项家长要记牢！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/C_Hke_51Uia7tpZuq_Zf-w',
          label: ['复学', '疫情']
        },
        {
          img: coupe8,
          title: '甲状腺宣传周 | 喝水都会胖，竟是甲减在捣鬼',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/sGWRfLgHKq-ZCGUiTFbbrQ',
          label: ['甲减', '甲状腺宣传周']
        },
        {
          img: coupe9,
          title: '母乳喂养|新手宝妈们收下这份指南！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/d7Gh9kp32MXwtPlyji4J7Q',
          label: ['母乳喂养', '宝宝攻略']
        },
        {
          img: coupe10,
          title: '宝宝缺不缺维生素D主要看这个…',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/vyYy3ZzDlGlj_fw-GfHzPA',
          label: ['宝宝', '营养']
        },
        {
          img: coupe11,
          title: '入夏在即，你的肠胃还好吗？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/KYjH9Mgkp81uqAx-ORueJQ',
          label: ['胃肠道疾病', '腹泻']
        },
        {
          img: coupe12,
          title: '颈椎病的10个级别，快来看看你是几级？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/7aOhMs7rMDD6bS9JtTe3DQ',
          label: ['颈椎病']
        },
        {
          img: coupe13,
          title: '这个病通过亲吻就能传染给孩子，我们却都忽略了！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/zWEw0a8wUId0atAKeuHUiQ',
          label: ['口腔']
        },

        {
          img: coupe14,
          title: '令家长头疼的儿童哮喘，究竟是怎么一回事？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/pq1emxXJVsmr8wDpMc_Ugw',
          label: ['儿童哮喘']
        },
        {
          img: coupe15,
          title: '什么是“倒春寒”？春天孩子衣服又该怎么穿？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/uDVUjgsoSjsXWC3J5ea5mw',
          label: ['春季保养']
        },
        {
          img: coupe16,
          title: '春天来了，过敏性鼻炎怎么防？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/2IOJchm76ChkzFJKk3A7rQ',
          label: ['鼻炎']
        },
        {
          img: coupe17,
          title: '你没瘦下来可能是方法不对？快来看看如何科学减肥吧~',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/7ubWkusadUHWESsEmIE7dw',
          label: ['减肥']
        },
        {
          img: coupe18,
          title: '这点做得好，“口罩痘痘”没烦恼！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/D4UB2w327kPBQp4V5NWXHg',
          label: ['痘痘', '痤疮']
        },
        {
          img: coupe19,
          title: '快开学了，孩子的视力还好吗？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/0UyadWFdmgCj0b2hBbOURA',
          label: ['复学', '视力']
        },
        {
          img: coupe20,
          title: '该怎么拯救，你的咳嗽？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/QyI5hwns9utgQI4bzrEgwA',
          label: ['咳嗽']
        },
        {
          img: coupe21,
          title: '对抗病毒，你可能需要常备一件毛衣',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/MGyHB2j0Y-3rybBn4IaHbA',
          label: ['新冠肺炎']
        },
        {
          img: coupe22,
          title: '疫情期间，你好好睡觉了吗？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/1usvqJAg16bTN6EjLCQLtA',
          label: ['失眠', '睡眠', '新冠肺炎']
        },
        {
          img: coupe23,
          title: '这个部位沾染病毒概率很高，你却可能忽略了！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/yoIRo7p3Fav34mFg7J8BZQ',
          label: ['新冠肺炎']
        },
        {
          img: coupe24,
          title: '特殊时期，最有用的“特效药”是自身免疫力！',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/zDhoK23E5Xi_LIjj5HhcsQ',
          label: ['免疫力']
        },
        {
          img: coupe25,
          title: '除了禁食野味，中国人这个“餐桌陋习”也要改了',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/QOV6GLgLnba5QI7hjR1q5A',
          label: ['饮食健康', '新冠肺炎']
        },
        {
          img: coupe26,
          title: '当“眼痒”遇上了“新冠”',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/Qmvfu73DLFSa7M9cZhhxrw',
          label: ['眼痒', '新冠肺炎']
        },
        {
          img: coupe27,
          title: '停课不停学，如何科学护眼？',
          time: '2020-03-21 09:10',
          newsId: 'https://mp.weixin.qq.com/s/qtjrG0qb9hI1JqAbvFUKXw',
          label: ['视力', '新冠肺炎']
        }
      ]
    }
  },
  components: {
    motionlessBanner,
    newsItem,
    infiniteLoading
  }
}
</script>
<style lang="less">
.coupe {
  .news-time {
    display: none;
  }
  .motionless-banner-title {
    p {
      // color: #ffffff;
    }
  }
  .coupe-contnet {
    margin-bottom: 2.5rem;
  }
}
</style>