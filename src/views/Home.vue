<template>
<div class="home" ref="home">
  <!-- <div id="sakura-container" ></div> -->
  <SwiperSlideCom bg="../assets/timg.jpeg"/>
      <!-- <img class="bgImg" src="../assets/timg.jpeg" alt="" srcset=""> -->
      <Login/>
</div>
</template>

<script>
// @ is an alias to /src
// import test from '../components/test.md'
import SwiperSlideCom from '../components/swiper-slide.vue'
// import {
//   Swiper,
//   SwiperSlide,
//   directive
// } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// import { RENDERER } from '../utils/sakura.js'
import Login from '../components/login.vue'
import { Snow}  from '../utils/snow.js'
export default {
  name: 'Home',
  components: {
    // Swiper,
    // SwiperSlide,
    SwiperSlideCom,
    Login
  },
  // directives: {
  //   swiper: directive
  // },
  data() {
    return {
    //   swiperOptions: {
    //     direction: 'vertical',
    //     slidesPerView: 1,
    //     mousewheel: true,
    //     height: window.innerHeight, // 高度设置，占满设备高度
    // //     autoplay: {
    // // 　　　delay: 1500,
    // // 　　  disableOnInteraction: false
    // // 　　},
    //     speed: 1500,
    //     loop: false
    //   }
    }
  },
  computed: {
   
  },
  methods: {
   
  },
  mounted() {
    this.$nextTick(_=>{
      // RENDERER.init() // 消耗性能。。。。
      let snow = new Snow()
      this.interval = setInterval(function(){
        snow.play()
      }, 500)
    })
    // this.swiper.slideTo(1, 1500, false)
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: black;
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
