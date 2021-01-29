<template>
  <div class="global-timeline">
    <div class="responsive-container text-center">
      <p
        class=" text-black-main pc:text-font-50 h5:text-font-32 font-bold pc:text-center h5:text-left"
      >
        发展进程
      </p>
      <div
        class=" text-gray-main text-font-18 mt-10 pc:text-center h5:text-left"
      >
        富乐医疗致力于提供便捷、优质且价格合理的医疗健康服务。
      </div>
      <div class="timeline-body  flex-col items-center pc:flex h5:hidden">
        <div
          class="timeline-item"
          v-for="(item, index) in displayList"
          :key="'timeline' + index"
          :class="[
            index % 2 > 0 ? 'timeline-item-left' : 'timeline-item-right'
          ]"
        >
          <template v-if="index % 2 > 0">
            <div class="divide-line divide-line-left"></div>
            <div class="time left-time flex items-center">
              <div class="circle">{{ item.date }}</div>
              <div class="line"></div>
              <div class="small-circle"></div>
            </div>
            <div class="time-desc left-desc">
              <ul>
                <li
                  v-for="(desc, descIndex) in item.events"
                  :key="index + 'timeline' + descIndex"
                >
                  {{ desc }}
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <div class="divide-line divide-line-right"></div>
            <div class="right-desc time-desc ">
              <ul>
                <li
                  v-for="(desc, descIndex) in item.events"
                  :key="index + 'timeline' + descIndex"
                >
                  {{ desc }}
                </li>
              </ul>
            </div>
            <div class="time flex items-center right-time">
              <div class="small-circle"></div>
              <div class="line"></div>
              <div class="circle">{{ item.date }}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="timeline-body-h5 pc:hidden h5:block">
        <div
          class="timeline-item flex"
          v-for="(item, index) in displayList"
          :key="'timeline' + index"
        >
          <div class="left">
            <div class="circle font-bold">{{ item.date }}</div>
            <div class="line"></div>
            <div class="small-circle"></div>
          </div>
          <div class="right">
            <ul>
              <li
                v-for="(desc, descIndex) in item.events"
                :key="index + 'timeline' + descIndex"
              >
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="clinic-button mt-5 mx-auto"
        @click="expandAll"
        v-if="showMore"
      >
        查看更多
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayList: [],
      showMore: true,
      list: [
        {
          date: '2018',
          events: [
            '收购intelicare group，进军菲律宾市场',
            '投资环球医生多数股权，正式进入中国大陆市场'
          ]
        },
        {
          date: '2017',
          events: [
            '收购澳洲第二大私立医院集团Healthscope的医疗中心，拓展澳大利亚医疗健康平台',
            '平安资本及其关联方成为富乐医疗的第二大股东',
            '通过永久债券募集到1.75亿美元'
          ]
        },
        {
          date: '2016',
          events: [
            '富乐集团旗下Ocean Financial Centre诊所（新加坡）荣获国际JCI认证 – 门诊护理领域金印章',
            '收购印度尼西亚最大的医疗网络管理和第三方医保平台（TPA）Medilum（现为Fullerton Health Indonesia），提升医疗福利管理服务能力',
            '启用“Fullerton Health”作为集团新的名称并更新公司商标，开启公司新的篇章并全面涵盖了公司所有的服务内容'
          ]
        },
        {
          date: '2015',
          events: [
            '投资香港维健医务有限公司，扩大在中国香港地区的影响力',
            '投资RadLink，进入新加坡先进医学影像诊断市场',
            '投资印度尼西亚Global Assistance & Healthcare，扩大医疗救援及转运能力',
            '收购马来西亚医疗服务供应商COSSB，进入马来西亚市场'
          ]
        },
        {
          date: '2014',
          events: [
            '投资Tirta Medical Group，进入印度尼西亚市场',
            '进入澳大利亚的初级诊疗市场',
            '投资Drs. Horne & Chin'
          ]
        },
        {
          date: '2013',
          events: [
            '投资两家日间手术中心及两家医疗机构，正式进入中国香港地区市场',
            '投资Jobfit医疗服务和企业服务网络，进入澳大利亚市场'
          ]
        },
        {
          date: '2012',
          events: [
            '集团控股公司“Fullerton Healthcare Corporation Limited”在开曼群岛注册成立'
          ]
        },
        {
          date: '2011',
          events: [
            '收购医疗服务机构Gethin-Jones、Drs. Trythall Hoy Davies (THD)及A.M. Pharmacy连锁药房'
          ]
        },
        {
          date: '2010',
          events: ['Fullerton Healthcare Group Pte. Limited” 在新加坡注册成立']
        }
      ]
    }
  },
  mounted() {
    this.displayList = this.list.slice(0, 5)
  },
  methods: {
    expandAll() {
      this.showMore = false
      this.displayList = this.list
    }
  }
}
</script>

<style lang="less">
@import '../../components/button.less';
.global-timeline {
  background-color: #f1f2f6;
  padding: 4rem 0;
  ul li::before {
    content: '\2022';
    @apply text-black-main;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  .timeline-body {
    margin-top: 20px;
    .timeline-item {
      @apply flex items-center;
      position: relative;
      .divide-line {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: rgba(13, 125, 252, 1);
      }
      .divide-line-left {
        left: 442.5px;
      }
      .divide-line-right {
        right: 442.5px;
      }
      .time {
        position: relative;
        .circle {
          width: 130px;
          height: 130px;
          text-align: center;
          line-height: 130px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(13, 125, 252, 1);
          border-radius: 100%;
          @apply text-font-30 text-black-main;
        }
        .line {
          width: 205px;
          height: 1px;
          background: rgba(13, 125, 252, 1);
        }
        .small-circle {
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(13, 125, 252, 1);
          border-radius: 100%;
        }
      }
      @postionDis: 97.5px;
      .left-time {
        position: relative;
        left: @postionDis;
      }
      .right-time {
        position: relative;
        right: @postionDis;
      }
      .right-desc {
        border-left: none !important;
        padding: 40px 60px 60px 0px;
        position: relative;
        right: @postionDis;
      }
      .left-desc {
        position: relative;
        left: @postionDis;
      }
      .time-desc {
        width: 531px;
        padding: 40px 0 60px 60px;
        text-align: left;
        @apply text-font-16 text-black-main;
      }
    }
  }
  .timeline-body-h5 {
    margin-top: 20px;
    .timeline-item {
      .left {
        @apply flex items-center;
        position: relative;
        right: -8px;
        z-index: 1;
        .circle {
          width: 70px;
          height: 70px;
          line-height: 70px;
          text-align: center;
          border-radius: 100%;
          border: 1px solid rgba(13, 125, 252, 1);
          font-size: 20px;
          background-color: white;
          @apply text-black-main;
        }
      }
      .line {
        width: 52px;
        height: 1px;
        background: rgba(13, 125, 252, 1);
      }
      .small-circle {
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-color: white;
        border: 1px solid rgba(13, 125, 252, 1);
      }
    }
    .right {
      flex: 1;
      padding: 10px 0 30px 30px;
      text-align: left;
      border-left: 1px solid rgba(13, 125, 252, 1);
    }
  }
}
</style>