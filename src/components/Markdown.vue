<template>
<mavon-editor :ishljs="true" v-model="content" ref=md></mavon-editor>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';

@Component
export default class Markdown extends Vue {
  // constructor() {
  //   super()
  //   this.content = ''
  // }
  content = ''
}
</script>
<style>
.v-note-wrapper{
  z-index: 18;
}
</style>
