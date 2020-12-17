<template>
  <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12" class="txt-center">
    <emoji emoji="tada" :size="64" /> <br /> <br />
    {{ txtContent }}
  </el-col>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: "FinishView",
  components: {
    Emoji
  },
  props: {
    txtContent: String
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>