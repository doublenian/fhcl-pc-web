<template>
  <div class="clinicalNetworks">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div
      class="clinicalNetworks_title responsive-container pc:flex pc:justify-between pc:items-center"
    >
      <p class="h5:text-center pc:text-left text-font-50 font-semibold">
        国内线下诊所
      </p>
      <div class="input">
        <el-select
          v-model="value"
          filterable
          @change="clickRegionVal"
          placeholder="全国"
        >
          <el-option
            v-for="item in options"
            :key="'statusClinic' + item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <client-only placeholder="加载中...">
      <infinite-loading ref="infiniteLoading" :data="statusDateList">
        <template v-slot:default="{ finiteData }">
          <clinic-list :clinicLists="finiteData"></clinic-list>
        </template>
      </infinite-loading>
    </client-only>
  </div>
</template>

<script>
import { list } from './data.js'
import motionlessBanner from '@/components/motionless-banner'
import clinicList from './components/clinic-list'
import infiniteLoading from '@/components/infinite-loading'
export default {
  components: { motionlessBanner, clinicList, infiniteLoading },
  data() {
    return {
      banner: [
        {
          title: '多城市覆盖',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/clinicNeworks-banner.jpg',
          url: ''
        }
      ],
      list,
      options: [
        {
          value: '0',
          label: '全国'
        },
        {
          value: '9',
          label: '上海'
        },
        {
          value: '10',
          label: '北京'
        },
        {
          value: '1',
          label: '成都'
        },
        {
          value: '2',
          label: '东莞'
        },
        {
          value: '3',
          label: '广州'
        },
        {
          value: '4',
          label: '南京'
        },
        {
          value: '5',
          label: '昆山'
        },
        {
          value: '6',
          label: '南昌'
        },
        {
          value: '7',
          label: '西安'
        },
        {
          value: '8',
          label: '重庆'
        },

        {
          value: '11',
          label: '大连'
        }
      ],
      value: '0',
      statusDateList: [],
      dateList: []
    }
  },
  computed: {},
  created() {
    // this.list = this.list.concat(this.list)
    // this.list = this.list.concat(this.list)
    // this.list = this.list.concat(this.list)
    // this.list = this.list.concat(this.list)
    this.statusDateList = this.list
  },
  methods: {
    clickRegionVal(val) {
      let list = []
      this.$refs.infiniteLoading.clearData()
      if (val !== '0') {
        this.list.forEach((item) => {
          if (item.status === val) {
            list.push(item)
          }
        })
        this.statusDateList = list
      } else {
        this.statusDateList = this.list
      }
      console.log(this.statusDateList)
      let body = document.querySelector('body')
      body.scrollTop = body.scrollHeight
      // this.getinfiniteList(1, 12)
    }
    // getinfiniteList(pageNab, pageSize) {
    //   let clinicNab = pageNab
    //   let clinicSize = pageNab * pageSize
    //   if (clinicSize > this.list.length) {
    //     clinicSize = this.list.length
    //   }
    //   this.dateList = this.statusDateList.slice((pageNab - 1) * 12, clinicSize)
    // }
  }
}
</script>
<style lang="less">
.el-select-dropdown__item {
  font-size: 1.25rem !important;
  height: 40px;
}
.clinicalNetworks {
  .el-input__inner {
    font-size: 1.25rem;
  }
  .clinicalNetworks_title {
    margin: 1.25rem auto;
    p {
      padding: 1.56rem 0;
    }
    .input {
      padding: 1.56rem 0;
    }
  }
  .el-input__inner {
    border-radius: 0 !important;
    border: 1px solid #73798d;
  }
  .el-input:hover .el-input__inner {
    border: 1px solid #73798d !important;
  }
  .el-select .el-input .el-select__caret {
    color: #73798d;
  }
  .el-input__inner::-webkit-input-placeholder {
    color: #73798d;
  }
}
@screen h5 {
  .clinicalNetworks {
    .el-select {
      width: 100%;
    }
  }
}
@screen pc {
  .clinicalNetworks {
    .el-select {
      width: 434px;
    }
  }
}
</style>