<template>
  <div class="responsive-container">
    <div class="global-map-mb-content">
      <p class=" text-left  font-bold" style="font-size:24px">
        快速增长的亚太区医疗健康行业中的领先企业
      </p>
      <p class=" text-left text-gray-main my-6" style="font-size:16px">
        超过50年的服务经验，525家自营医疗中心，11,800多个医疗网络合作伙伴，25,000多个网络内签约医生，1,320多万服务客户，350多万就诊患者及1,450万年均就诊人次。
      </p>
      <el-collapse v-model="activeNames">
        <el-collapse-item
          :disabled="!!item.disabled"
          :title="item.name"
          :name="item.country"
          v-for="(item, index) in list"
          :key="'collapse' + index"
        >
          <div class="country-collapse-content">
            <p
              class=" text-gray-main"
              style="font-size:16px"
              v-html="globalCountry[item.country].desc"
            ></p>
            <p class="text-black-main font-bold mt-4" style="font-size:16px">
              富乐医疗旗下品牌
            </p>
            <div
              class="logo-wrapper flex flex-wrap"
              v-for="(image, imageIndex) in globalCountry[item.country].images"
              :key="globalCountry[item.country]['title'] + imageIndex"
            >
              <a v-if="image.url" :href="image.url" target="_blank"
                ><img :src="image.icon" alt=""
              /></a>
              <img :src="image.icon" alt="" v-else />
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { globalCountry } from './data'
export default {
  data() {
    return {
      activeNames: 'sg',
      globalCountry,
      list: [
        {
          country: 'sg',
          name: '新加坡'
        },
        {
          country: 'au',
          name: '澳大利亚'
        },
        {
          country: 'cn',
          name: '中国'
        },
        {
          country: 'hk',
          name: '中国香港'
        },
        {
          country: 'id',
          name: '印度尼西亚'
        },
        {
          country: 'my',
          name: '马来西亚'
        },
        {
          country: 'nz',
          name: '新西兰'
        },
        {
          country: 'ph',
          name: '菲律宾'
        },
        {
          country: 'pg',
          name: '巴布亚新几内亚',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="less">
.global-map-mb-content {
  background-color: white;
  padding: 2.25rem 0;

  .el-collapse {
    border-top: none;
    border-bottom: none;
  }
  .el-collapse-item__header {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 1px solid rgba(238, 240, 242, 1);
    padding-left: 20px;
    font-weight: bold;
    font-size: 18px;
    @apply text-black-main font-bold;
  }
  .el-collapse-item__wrap {
    border-bottom: none;
  }
  .country-collapse-content {
    border-bottom: 1px solid rgba(238, 240, 242, 1);
    border-left: 1px solid rgba(238, 240, 242, 1);
    border-right: 1px solid rgba(238, 240, 242, 1);
  }
  .el-icon-arrow-right:before {
    content: '\e6df';
  }
  .el-collapse-item__arrow.is-active {
    transform: rotate(-180deg);
  }
  .el-collapse-item {
    margin-top: 8px;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .country-collapse-content {
    padding: 20px;

    .logo-wrapper {
      margin-top: 14px;
      width: 231px;
      background: rgba(247, 247, 247, 1);
      height: 62px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>