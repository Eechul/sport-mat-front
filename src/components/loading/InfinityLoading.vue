<template>
  <div>
    <span v-if="!finish && load">Loading ...</span>
    <span v-if="finish">{{ finishTxt }}</span>
    <Loading />
  </div>
</template>

<script>
import Loading from "@/components/loading/Loading";

export default {
  props: {
    load: Boolean,
    finish: Boolean
  },
  components: {
    Loading
  },
  data() {
    return {
      finishTxt: '데이터가 존재하지 않아요 :)'
    }
  },
  methods:  {

  }
}
</script>

<style scoped>

</style>