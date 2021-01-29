<template>
  <div class="medical-team">
    <motionlessBanner :banner="banner" type="bannerImg"></motionlessBanner>
    <div>
      <div class="medicalTeam-head responsive-container">
        <p
          style="margin-bottom:0.625rem;"
          class="text-font-50 text-black-main font-semibold"
        >
          医疗团队
        </p>
        <p class="text-font-18 text-gray-main">
          富乐医疗携手各科专家，组成团队综合实力强劲，国际化专业的医疗团队
        </p>
      </div>
      <div class="medical-team-title responsive-container text-black-main">
        <div class="medical-team-title-content">
          <p class="text-font-16">诊所</p>
          <el-select
            class="text-font-20"
            v-model="clinic"
            @change="clickClinicVal"
            placeholder="请选择诊所"
          >
            <el-option
              v-for="item in clinicalList"
              :key="'statusclinic' + item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="medical-team-title-content">
          <p>科室</p>
          <el-select
            v-model="deskWork"
            @change="clickDeskWorkVal"
            placeholder="请选择科室"
          >
            <el-option
              v-for="item in deskWorkList"
              :key="'deskWork' + item.departmentsId"
              :label="item.departments"
              :value="item.departmentsId"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div>
        <client-only placeholder="加载中...">
          <infinite-loading ref="infiniteLoading" :data="doctorList">
            <template v-slot:default="{ finiteData }">
              <div class="medical-team-count">
                <div
                  class="doctorTeam"
                  v-for="(item, index) in finiteData"
                  :key="'doctorTeams' + index"
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
import { clinicDetailList } from '../clinical-networks/detail/data.js'
import { list } from '../clinical-networks/data.js'
import motionlessBanner from '@/components/motionless-banner'
import infiniteLoading from '@/components/infinite-loading'
import doctorListItem from '@/pages/components/doctor-list-item'
export default {
  data() {
    return {
      clinicDetailList,
      clinicList: list,
      doctorList: [],
      deskWorkList: [
        {
          departmentsId: 'all',
          departments: '全部'
        }
      ],
      clinicalList: [
        {
          name: '全部',
          id: 'all'
        }
      ],
      banner: [
        {
          title: '国际化专业团队',
          count: '为亚太区每个人提供便捷、优质且价格合理的医疗健康服务',
          img:
            'https://fhc-web-1301696124.cos.ap-shanghai.myqcloud.com/service/medicalTeam-banner.jpg',
          url: ''
        }
      ],
      clinicDetail: [],
      deskWork: 'all',
      clinic: 'all',
      alldexkList: []
    }
  },
  components: {
    motionlessBanner,
    infiniteLoading,
    doctorListItem
  },
  created() {
    this.clinicalList = this.clinicalList.concat(this.clinicList)
    this.clinicDetailList.forEach((item, index) => {
      this.clinicDetail = this.clinicDetail.concat(item.doctor)
      if (index === this.clinicDetailList.length - 1) {
        this.doctorList = this.unique(this.clinicDetail, 'name')
        let deskWorkList = []
        this.clinicDetail.forEach((item) => {
          if (item.departmentsId.constructor === String) {
            deskWorkList.push(item)
          }
        })
        this.deskWorkList = this.deskWorkList.concat(deskWorkList)
        this.deskWorkList = this.unique(this.deskWorkList, 'departmentsId')

        this.alldexkList = this.deskWorkList
      }
    })
  },
  methods: {
    clickClinicVal(val) {
      console.log(val)
      this.deskWorkList = []
      let desk = [
        {
          departmentsId: 'all',
          departments: '全部'
        }
      ]
      this.deskWork = 'all'
      let body = document.querySelector('body')
      this.clinicDetailList.forEach((item, index) => {
        if (item.id === val) {
          console.log(item.doctor)
          let deskWorkList = []
          item.doctor.forEach((item) => {
            if (item.departmentsId.constructor === String) {
              deskWorkList.push(item)
            } else {
              this.alldexkList.forEach((item2) => {
                item.departmentsId.forEach((item3) => {
                  if (item3 === item2.departmentsId) {
                    deskWorkList.push(item2)
                  }
                })
              })
            }
          })
          this.deskWorkList = desk.concat(deskWorkList)
          this.deskWorkList = this.unique(this.deskWorkList, 'departmentsId')
          console.log(this.deskWorkList)
          this.clinicDetail = item.doctor
          this.doctorList = this.clinicDetail
          this.$refs.infiniteLoading.clearData()
          body.scrollTop = body.scrollHeight
          return
        } else if (val === 'all') {
          this.clinicDetail = this.clinicDetail.concat(item.doctor)
          this.doctorList = this.clinicDetail
          let deskWorkList = []
          this.clinicDetail.forEach((item) => {
            if (item.departmentsId.constructor === String) {
              deskWorkList.push(item)
            }
          })
          // console.log(deskWorkList)
          this.deskWorkList = desk.concat(deskWorkList)
          this.deskWorkList = this.unique(this.deskWorkList, 'departmentsId')
          this.$refs.infiniteLoading.clearData()
          body.scrollTop = body.scrollHeight
        }
        // }
      })
    },
    clickDeskWorkVal(val) {
      let body = document.querySelector('body')
      this.doctorList = []
      this.clinicDetail.forEach((item, index) => {
        if (item.departmentsId.constructor === String) {
          if (val === item.departmentsId) {
            this.doctorList.push(item)
          }
        } else {
          if (item.departmentsId.indexOf(val) !== -1) {
            this.doctorList.push(item)
          }
        }

        if (index === this.clinicDetail.length - 1) {
          this.$refs.infiniteLoading.clearData()
          body.scrollTop = body.scrollHeight
        }
      })
    },

    //json数组去重
    unique(arr, attribute) {
      var new_arr = []
      var json_arr = []
      for (var i = 0; i < arr.length; i++) {
        if (new_arr.indexOf(arr[i][attribute]) == -1) {
          //  -1代表没有找到
          new_arr.push(arr[i][attribute]) //如果没有找到就把这个name放到arr里面，以便下次循环时用
          json_arr.push(arr[i])
        } else {
        }
      }
      return json_arr
    }
  }
}
</script>
<style lang="less">
.medical-team {
  .banner-swiper-image {
    background-size: cover;
    background-position: center -50px !important;
  }
  .medicalTeam-head {
    padding-top: 4.375rem;
    padding-bottom: 3.125rem;
    p:nth-of-type(1) {
      margin-bottom: 1.25rem;
    }
  }
  .medical-team-title {
    .medical-team-title-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-items: center;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;

    p {
      margin-right: 1.25rem;
      margin-bottom: 1.875rem;
    }
    .el-input__inner {
      width: 20.81rem;
      height: 3.375rem;
      font-size: 1.25rem;
      color: #00072a;
      border-radius: 0 !important;
      border: 1px solid #73798d;
    }
    .el-select {
      margin-right: 1.5rem;
      margin-bottom: 1.875rem;
    }
  }
  .doctorTeam {
    margin-bottom: 1.5rem;
    width: 100%;
  }
}
@screen h5 {
  .medical-team {
    .medical-team-count {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
@screen pc {
  .medical-team {
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
  }
}
</style>