<template>
  <infinite-loading @infinite="infiniteHandler">
    <div slot="spinner"><loading /></div>
    <div slot="no-more">데이터가 더이상 존재하지 않아요.</div>
    <div slot="no-results">데이터를 모두 불러왔어요.</div>
  </infinite-loading>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Loading from "@/components/loading/Loading";

export default {
  props: {
    loadFunc: Function,
  },
  components: {
    InfiniteLoading,
    Loading
  },
  data() {
    return {
    }
  },
  methods:  {
    infiniteHandler($state) {
      const self = this
      setTimeout(function() {
        self.loadFunc()
        $state.complete()
      }, 1500)
    }
  }
}
</script>

<style scoped>

</style>