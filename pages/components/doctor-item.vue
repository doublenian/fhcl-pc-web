<template>
  <div class="doctor-item-content cursor-pointer">
    <div
      class="doctor-bg h5:hidden pc:block"
      :style="{
        backgroundImage:
          'url(' + doctorInfo.headPortrait + '?imageMogr2/scrop/900x1000' + ')'
      }"
    ></div>
    <div
      class="doctor-bg h5:block pc:hidden"
      :style="{
        backgroundImage:
          'url(' + doctorInfo.headPortrait + '?imageMogr2/scrop/600x600' + ')'
      }"
    ></div>
    <div class="item-info pc:block h5:hidden">
      <p class=" text-font-20 text-primary mb-1">{{ doctorInfo.name }}</p>
      <div class=" text-font-16  text-gray-main">
        <p>{{ doctorInfo.title }}</p>
        <p>{{ doctorInfo.departments }}</p>
      </div>
    </div>
    <div class="doctor-profile">
      <div class="item-info">
        <p class=" text-font-20 text-primary mb-1">{{ doctorInfo.name }}</p>
        <div class=" text-font-16  text-gray-main">
          <p>{{ doctorInfo.title }}</p>
          <p>{{ doctorInfo.departments }}</p>
        </div>
      </div>

      <div class="hiddenblock info" :data-index="doctorIndex">
        <p class=" text-black-main text-font-16 mb-4">
          {{ doctorInfo.desc }}
        </p>
        <div class="qrcode-wrapper flex items-end text-black-main text-font-16">
          <img src="@/assets/images/qr_code.png" alt="" />
          <div class=" ml-2">
            <p>扫描二维码</p>
            <p>查看更多医生详情</p>
          </div>
        </div>
      </div>
      <div
        :data-index="doctorIndex"
        class="clickdectorDetail unfold-detail  text-font-16 text-gray-main pc:hidden"
      >
        <div
          class="clickdectorDetail flex justify-center items-center expand"
          :data-index="doctorIndex"
        >
          <span :data-index="doctorIndex" class="clickdectorDetail "
            >展开详情</span
          >
          <img
            :data-index="doctorIndex"
            class="clickdectorDetail "
            src="../../assets/images/medical-team/xjt.png"
            alt=""
          />
        </div>
        <div
          class="clickdectorDetail flex justify-center items-center  collapse"
          :data-index="doctorIndex"
        >
          <span>收起</span>
          <img
            :data-index="doctorIndex"
            class=" clickdectorDetail"
            src="../../assets/images/medical-team/sjt.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * doctorInfo 数据格式
 * {
    name: '陈继荣',
    title: '主任医师',
    departments: '麻醉科',
    headPortrait:'',
    desc:
      '从事妇产科临床工作20余年，熟练掌握各种妇科炎症利用药物或微创技术相结合的诊治手段，特别擅长阴道镜及宫颈疾病的诊治。'
  }
 */
export default {
  props: ['doctorInfo', 'doctorIndex']
}
</script>

<style lang="less">
.hiddenblock {
  display: none;
}
@screen h5 {
  .doctor-item-content {
    // height: 16.875rem;
    width: 100%;
    // height: auto;
    .doctor-bg {
      height: 100vw;
      background-position: top;
    }
    .doctor-profile {
      position: relative;
    }
  }
}
@screen pc {
  .doctor-item-content {
    height: auto;
    width: 24rem;
    .doctor-bg {
      height: 25.5rem;
      background-position: center;
    }
    &:hover {
      .doctor-profile {
        transform: translateY(0);
      }
    }
    .doctor-profile {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all ease 0.3s;
      transform: translateY(100%);
      .info {
        display: block !important;
      }
    }
  }
}
.doctor-item-content {
  overflow: hidden;
  border: 1px solid #eef0f2;
  position: relative;

  .doctor-bg {
    width: 100%;
    // background: url('~assets/images/home/assets/doctor1.png') no-repeat;
    background-size: cover;
  }
  .item-info {
    width: 100%;
    height: 8.875rem;
    padding: 1.875rem 1.25rem;
  }

  .doctor-profile {
    background-color: white;
    .info {
      padding: 0 1.25rem 1.25rem;
      .qrcode-wrapper {
        img {
          width: 6.25rem;
          height: 6.25rem;
        }
      }
    }
  }
  .unfold-detail {
    height: 3.5rem;
    line-height: 3.5rem;
    border-top: 1px solid #eef0f2;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>