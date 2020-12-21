<template>
  <div class="card-container">
    <div class="wrapper">
      <emoji :emoji="data.sport" :size="40" class="card-emoji"  v-if="!hidden['sport']"/>
      <el-card :body-style="{ padding: '0px' }">
        <img v-if="type === 'image'" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="mid-content image-content">
        <div v-if="type === 'normal'" class="mid-content team-content">
          <user-profile :name="data.username" :img="data.img"></user-profile>
        </div>
        <div class="bottom-content">
          <div v-if="!hidden['title']">{{ data.title }}</div>
          <div v-if="true">활동장소: 서울 동작구</div>
          <div>연령: 20대</div>
          <div class="bottom clearfix" v-if="!hidden['regDate']">
            <div class="time">{{ data.regDate | moment('YYYY-MM-DD HH:mm') }}</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import UserProfile from "@/components/UserProfile";

export default {
  name: "PlayerCard",
  components: {
    Emoji,
    UserProfile
  },
  props: {
    data: Object,
    type: String,
    hidden: Object
  },
  mounted() {

  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .card-container{
    position: relative;
  }

  .card-container .wrapper {
  }

  .el-card {
    margin-bottom: 12px;
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
    font-size: 14px;
  }
  .bottom-content > div {
    padding-bottom: 12px;
  }
  .bottom-content > div:last-child {
    padding-bottom: 0px;
  }

  .team-content {
  }
</style>