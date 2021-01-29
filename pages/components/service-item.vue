<template>
  <div class="service-item flex flex-col">
    <div
      class="service-bg"
      :style="{ backgroundImage: 'url(' + serviceInfo.imageUrl + ')' }"
    ></div>
    <div class="service-body relative flex-1">
      <div>
        <p class="title text-black-main text-font-20">{{ serviceInfo.name }}</p>
        <p class="desc text-gray-main text-font-16 mt-3 mb-4">
          {{ serviceInfo.detail }}
        </p>
      </div>

      <p
        class="text-font-18 text-primary absolute  know-more cursor-pointer"
        @click="toServicedetail(serviceInfo.type)"
      >
        了解更多
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceInfo: {
      type: Object
    }
  },
  methods: {
    toServicedetail(type) {
      if (type === 'coupe') {
        this.$router.push({ path: '/service/coupe' })
      } else {
        this.$router.push({ path: '/service/detail', query: { id: type } })
      }
    }
  }
}
</script>

<style lang="less" >
.service-item {
  background-color: white;

  .service-bg {
    width: 100%;
    height: 14.375rem;
    background: url('~assets/images/home/assets/service1.png') no-repeat;
    background-size: cover;
    background-position: center;
  }
  .service-body {
    width: 100%;
    padding: 1.875rem 1.25rem;
    .know-more {
      bottom: 1.25rem;
    }
  }
}

@screen h5 {
  .service-item {
    width: 100%;
    height: 27.5rem;
    margin-top: 20px;
  }
}
@screen pc {
  .service-item {
    width: 24rem;
    height: 27.5rem;
    margin-top: 0;
  }
}
</style>