<template>
  <div id="main-container">
    <el-row>
      <el-col :span="24">
        <div class="promotion-txt">스포츠 팀을 구하고</div>
        <div class="promotion-txt">경기를 매칭해보세요!</div>
      </el-col>
      <el-col>
        <carousel
            :type="'card'"
            :height="'350px'"
            :datas="[
                {title: '공지1', imgUrl: '../assets/img_notice_baseball.jpg'},
                {title: '공지2', imgUrl: '../assets/img_notice_baseball.jpg'},
                {title: '공지3', imgUrl: './assets/img_notice_baseball.jpg'}
            ]" />
      </el-col>
    </el-row>

    <el-row class="group-main-wait-team">
      <el-col :span="24" >
        <div class="block title-label" span="4" offset="1">대기중인 팀</div>
      </el-col>
      <el-col :span="4" :offset="1" v-for="card in card1" :key="card.id">
<!--        <card :data="card" :type="'image'" :content="null"/>-->
        <base-card :data="card" :type="'normal'"/>
      </el-col>
    </el-row>

    <el-row class="group-main-join-team">
      <el-col :span="24">
      </el-col>
    </el-row>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from "@/components/Carousel"
import BaseCard from "@/components/Card/BaseCard"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel,
    BaseCard,
  },
  data() {
    return {
      card1: [
        { id: '1', sport: 'soccer', title: 'title1', img: '', regDate: new Date() },
        { id: '2', sport: 'basketball', title: 'title2', img: '', regDate: new Date() },
        { id: '3', sport: 'volleyball', title: 'title2', img: '', regDate: new Date() },
        { id: '4', sport: 'bowling', title: 'title2', img: '', regDate: new Date() }
      ],
      card2: [{  }, {  }],
    }
  }
}
</script>

<style scoped>
  #main-container {
    padding: 12px;
  }
  .promotion-txt {
    font-size: 36px;
    padding: 16px;
  }
</style>
