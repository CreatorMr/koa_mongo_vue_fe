<template>
<mavon-editor :ishljs="true" :subfield="false" :editable="false" defaultOpen="preview" :toolbarsFlag="false" v-model="content" ref=md></mavon-editor>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';
import test from '../components/test.md'
@Component
export default class Markdown extends Vue {
  // constructor() {
  //   super()
  //   this.content = ''
  // }
  content = test
}
</script>
<style>
.v-note-wrapper{
  z-index: 18;
}
</style>
