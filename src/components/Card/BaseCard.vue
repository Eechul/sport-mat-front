<template>
  <div class="card-container">
    <div class="wrapper">
      <emoji :emoji="data.sport" :size="40" class="card-emoji"/>
      <el-card :body-style="{ padding: '0px' }">
        <img v-if="type === 'image'" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="mid-content image-content">
        <div v-if="type === 'normal'" class="mid-content team-content">
          <team-profile :name="data.team"></team-profile>
        </div>
        <div class="bottom-content">
          <span>{{ data.title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ data.regDate | moment('YYYY-MM-DD HH:mm') }}</time>
          </div>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import TeamProfile from "@/components/TeamProfile";

export default {
  name: "Card",
  components: {
    TeamProfile,
    Emoji
  },
  props: ["data", "type"]
}
</script>

<style scoped>
  .card-container{
    position: relative;
  }

  .card-container .wrapper {
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .card-emoji {
    position: absolute !important;
    top: -15px;
    right: 5px;
  }

  .mid-content {
    text-align: center;
    padding: 16px 16px 0px 16px;
  }

  .bottom-content {
    padding: 16px;
  }

  .team-content {
  }
</style>