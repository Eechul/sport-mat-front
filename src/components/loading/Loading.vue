<template>
  <div class="loading-wrap">
      <emoji :emoji="icons[randomPick]" :size="20" class="loading-icon"/>
  </div>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  components: {
    Emoji
  },
  mounted() {
    console.log(this.icons[this.randomPick])
  },
  computed: {
    randomPick() {
      const picNum = Math.floor((Math.random() * this.icons.length))
      return picNum
    }
  },
  data() {
    return {
      icons: ['soccer', 'baseball', 'basketball', 'volleyball', 'softball', 'tennis', '8ball', 'football'],
      pickIconIdx: -1
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .loading-icon {
    width: 20px;
    height: 20px;
    padding: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 50%;

    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
</style>