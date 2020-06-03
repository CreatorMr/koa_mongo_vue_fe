<template>
<div class="home" ref="home">
  <div id="sakura-container" ></div>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <!-- <img class="bgImg" src="../assets/timg.jpeg" alt="" srcset=""> -->
      <SwiperSlideCom bg="../assets/timg.jpeg"/>
    </swiper-slide>
    <swiper-slide>
      <img class="bgImg" src="../assets/timg.jpeg" alt="" srcset="">
      <SwiperSlideCom />
    </swiper-slide>
    <swiper-slide>
      <img class="bgImg" src="../assets/timg2.jpeg" alt="" srcset="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
// @ is an alias to /src
import test from '../components/test.md'
import SwiperSlideCom from '../components/swiper-slide.vue'
import {
  Swiper,
  SwiperSlide,
  directive
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { RENDERER } from '../utils/sakura.js'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    SwiperSlideCom
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        height: window.innerHeight, // 高度设置，占满设备高度
    //     autoplay: {
    // 　　　delay: 1500,
    // 　　  disableOnInteraction: false
    // 　　},
        speed: 1500,
        loop: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
   
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.$nextTick(_=>{
      RENDERER.init()
    })
    // this.swiper.slideTo(1, 1500, false)
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
}
 .bgImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #sakura-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000000;
  }
</style>
