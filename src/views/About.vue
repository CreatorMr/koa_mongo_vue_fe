<template>
<div class="about">
  <p align="center"><img style="border-radius:41%;" src='../assets/logo.jpg' alt="creator-head" height=200 width=200></p>
  这是一个关于我的介绍，“我” 拼音 “wo”， 我就是我，是颜色不一眼的烟火
  <div class="concat">
    <h3>联系我</h3>
    <div>
      <p>Email：[382988057@qq.com]</p>
      <p class="tmWeixin"> 微信：<img src='../assets/me.jpg' alt="creator-head" height=200 width=200></p>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class About extends Vue {

}
</script>

<style scoped>
.about {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.concat {
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
}
.tmWeixin{
  display: flex;
  justify-content: center;
}
</style>
