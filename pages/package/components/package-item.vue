<template>
  <div class="package-item flex justify-between flex-wrap">
    <div
      class="packageItem-content flex justify-start flex-wrap"
      v-for="(item, index) in packageList"
      :key="index"
      @click="
        $router.push({
          path: '/package/detail',
          query: { id: item.packageId }
        })
      "
    >
      <div class="packageItem_left">
        <div
          :style="{
            backgroundImage:
              'url(' + item.image[0].img + '?imageMogr2/thumbnail/!50p' + ')'
          }"
        ></div>
        <!-- <motionlessBanner :banner="item.image" type="img"></motionlessBanner> -->
        <!-- <img :src="item.image" alt="" /> -->
      </div>
      <div class="packageItem_right">
        <p class="text-font-20 text-black-main font-semibold">
          {{ item.title }}
        </p>

        <p class="text-font-16 text-gray-main">{{ item.content }}</p>
        <p
          class="packageItem_button text-font-18 text-primary font-semibold cursor-pointer"
        >
          了解更多
        </p>
      </div>
    </div>
  </div>
</template>
<script>
//数据格式
// {
//           packageId: '1',
//           image: [
//             {
//               img: package1,
//               url: ''
//             },
//             {
//               img: package1,
//               url: ''
//             }
//           ],
//           title: '关爱宝贝成长套餐（0-3岁）',
//           content: '本套餐包含:儿科医生问诊咨询、全面健康筛查、健康筛查评估'
// },

import motionlessBanner from '@/components/motionless-banner'
export default {
  props: ['packageList'],
  components: {
    motionlessBanner
  },
  data() {
    return {}
  }
}
</script>
<style lang="less">
.package-item {
  margin-bottom: -1.5rem;
  .packageItem-content {
    margin-bottom: 1.5rem;
    .packageItem_left {
      div {
        height: 200px;
        background-size: cover;
        background-position: center;
      }
    }
    .packageItem_right {
      background: #eef0f2;
      padding-top: 1.875rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      position: relative;
      p:nth-of-type(1) {
        margin-bottom: 0.625rem;
      }
      p:nth-of-type(2) {
        word-break: break-all;
        display: -webkit-box; /**对象作为伸缩盒子模型展示**/
        -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
        -webkit-line-clamp: 2; /**显示的行数**/
        overflow: hidden; /**隐藏超出的内容**/
      }
      .packageItem_button {
        position: absolute;
        bottom: 1.25rem;
      }
    }
  }
}

@screen h5 {
  .packageItem-content {
    width: 100%;
    border: 0;

    .packageItem_left {
      width: 100%;
    }
    .packageItem_right {
      width: 100%;
      padding-bottom: 4.125rem;
    }
  }
}
@screen pc {
  .packageItem-content {
    width: 588px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    .packageItem_left {
      width: 39%;
    }
    .packageItem_right {
      width: 61%;
      padding-bottom: 1.25rem;
    }
  }
}
</style>