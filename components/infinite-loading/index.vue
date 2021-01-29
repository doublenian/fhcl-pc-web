<template>
  <div class="infinite responsive-container">
    <div>
      <slot :finiteData="dateList"></slot>
      <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
        <span slot="no-more"></span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  props: ['data'],
  data() {
    return {
      list: [],
      pageNab: 0,
      pageSize: 12,
      infiniteLoading: null,
      dateList: []
    }
  },
  methods: {
    onInfinite($state) {
      this.list = this.data
      this.infiniteLoading = $state
      setTimeout(() => {
        this.pageNab++
        this.getinfiniteList(this.pageNab, this.pageSize)
        $state.loaded()
      }, 1000)
    },
    clearData() {
      this.dateList = []
      this.pageNab = 0
      this.pageSize = 12
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
    },
    getinfiniteList(pageNab, pageSize) {
      let clinicNab = pageNab
      let clinicSize = pageNab * pageSize
      if (clinicSize > this.data.length) {
        clinicSize = this.data.length
        this.infiniteLoading.complete()
      }
      let list = this.list.slice((pageNab - 1) * 12, clinicSize)
      this.dateList = this.dateList.concat(list)
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>
<style lass="less">
.infinite-status-prompt {
  /* display: none;
  opacity: 0; */
}
@screen h5 {
  .infinite {
  }
}
@screen pc {
  /* .infinite {
    box-sizing: content-box;
    height: 885px;
    overflow-y: scroll;
  } */
}
</style>