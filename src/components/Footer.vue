<template>
<!-- <div class="footer"> 修炼“爱情”的心酸 2020 Created by Creator </div> -->
<footer>
  <div class="copywrite">
    <div class="p_wrap">
      修炼“爱情”的心酸 2020 Created by Creator  京ICP备20022901号-1
    </div>
  </div>
</footer>
</template>

<script lang="ts">
import {
  Vue,
  Component
} from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {

  text-align: center;
  padding: 20px;
  font-weight: bold;
}

footer {
  width: 100%;
  height: 150px;
  background: #303137;
  position: fixed;
  bottom: 0;
}

footer .copywrite {
  /* height: 150px;
  font-size: 16px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 150px;
  opacity: 0.5;
  position: relative; */
}

footer .copywrite .p_wrap {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
