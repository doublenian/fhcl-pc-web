<template>
  <div class="clinic-team-content">
    <div class=" text-center mb-10">
      <p
        style="margin-bottom:0.625rem;"
        class=" pc:text-font-50 h5:text-font-40 text-black-main  font-bold pc:text-center h5:text-left"
      >
        医疗团队
      </p>
      <p class="text-gray-main text-font-16 pc:text-center h5:text-left">
        富乐医疗携手各科专家，组成团队综合实力强劲，国际化专业的医疗团队。
      </p>
    </div>
    <div class="doctor-list-swiper-pc pc:block h5:hidden">
      <img
        src="@/assets/images/home/swipe-left.png"
        alt=""
        class="swipe-arrow swipe-arrow-left cursor-pointer"
        @click="doctorSwiperPc.slidePrev()"
      />
      <img
        src="@/assets/images/home/swipe-right.png"
        alt=""
        @click="doctorSwiperPc.slideNext()"
        class="swipe-arrow swipe-arrow-right cursor-pointer"
      />
      <div v-swiper:doctorSwiperPc="swiperOptionPc">
        <div class="swiper-wrapper ">
          <doctor-item
            :doctor-info="item"
            v-for="(item, index) in doctors"
            :key="'doctors' + index"
            class="swiper-slide"
            @mouseenter.native="stopAutoPlay"
            @mouseleave.native="startAutoPlay"
          ></doctor-item>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="doctor-list-swiper-h5 pc:hidden h5:block">
      <img
        src="@/assets/images/home/swipe-left.png"
        alt=""
        class="swipe-arrow swipe-arrow-left cursor-pointer"
        @click="doctorSwiperH5.slidePrev()"
      />
      <img
        src="@/assets/images/home/swipe-right.png"
        alt=""
        @click="doctorSwiperH5.slideNext()"
        class="swipe-arrow swipe-arrow-right cursor-pointer"
      />
      <div v-swiper:doctorSwiperH5="swiperOptionH5">
        <div class="swiper-wrapper ">
          <div
            class="swiper-slide "
            v-for="(item, index) in doctors"
            :key="'doctors' + index"
          >
            <doctor-item
              ref="doctorItem"
              :doctor-info="item"
              :doctor-index="index"
              class="swiper-slide"
            ></doctor-item>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div
      class="clinic-button mx-auto mt-10"
      @click="$router.push({ path: '/medical-team' })"
    >
      查看全部
    </div>
  </div>
</template>

<script>
import DoctorItem from './doctor-item'
import doctor1 from '@/assets/images/home/assets/doctor1.png'
import doctor2 from '@/assets/images/home/assets/doctor2.png'
import { doctors } from './data'
export default {
  components: {
    DoctorItem
  },
  data() {
    const that = this

    return {
      swiperOptionPc: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        slidesPerView: 3,
        spaceBetween: 24
      },
      swiperOptionH5: {
        loop: true,
        autoplay: false,

        on: {
          click: function(e) {
            let index = e.target.getAttribute('data-index')
            if (e.target.classList[0] === 'clickdectorDetail') {
              let $info = document.querySelectorAll(
                `[data-index='${index}'].info`
              )
              let $expand = document.querySelectorAll(
                `[data-index='${index}'].expand`
              )
              let $collapse = document.querySelectorAll(
                `[data-index='${index}'].collapse`
              )
              $info.forEach((item, infoIndex) => {
                if (item.classList.contains('hiddenblock')) {
                  $info[infoIndex].classList.remove('hiddenblock')
                  $expand[infoIndex].classList.add('hiddenblock')
                  $collapse[infoIndex].classList.remove('hiddenblock')
                } else {
                  $info[infoIndex].classList.add('hiddenblock')
                  $expand[infoIndex].classList.remove('hiddenblock')
                  $collapse[infoIndex].classList.add('hiddenblock')
                }
              })
            }
          },
          slideChange: function() {
            that.doctors.forEach((item, index) => {
              let $info = document.querySelectorAll(
                `[data-index='${index}'].info`
              )
              let $expand = document.querySelectorAll(
                `[data-index='${index}'].expand`
              )
              let $collapse = document.querySelectorAll(
                `[data-index='${index}'].collapse`
              )
              $info.forEach((item, infoIndex) => {
                $info[infoIndex].classList.add('hiddenblock')
                $expand[infoIndex].classList.remove('hiddenblock')
                $collapse[infoIndex].classList.add('hiddenblock')
              })
            })
          }
        }
      },
      doctors
    }
  },
  mounted() {},
  methods: {
    stopAutoPlay() {
      this.doctorSwiperPc.autoplay.stop()
    },
    startAutoPlay() {
      this.doctorSwiperPc.autoplay.start()
    }
  }
}
</script>

<style lang="less">
@import './button.less';
@screen h5 {
  .clinic-team-content {
    padding: 2.25rem 0;
  }
}
@screen pc {
  .clinic-team-content {
    padding: 6.25rem 0;
  }
}

.clinic-team-content {
  width: 100%;
  background: white;
  .doctor-list-swiper-pc {
    width: 100%;
    position: relative;
    .swipe-arrow {
      position: absolute;
      z-index: 2;
      top: 250px;
      width: 3.75rem;
      height: 3.75rem;
    }
    .swipe-arrow-left {
      left: -80px;
    }
    .swipe-arrow-right {
      right: -80px;
    }
    .swiper-container {
      width: 100%;
    }
  }
  .doctor-list-swiper-h5 {
    position: relative;
    .swipe-arrow {
      position: absolute;
      z-index: 2;
      top: 100px;
      width: 3.75rem;
      height: 3.75rem;
    }
    .swipe-arrow-left {
      left: -20px;
    }
    .swipe-arrow-right {
      right: -20px;
    }
    .swiper-container {
      width: 100%;
    }
  }
}
</style>