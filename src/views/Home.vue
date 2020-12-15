<template>
  <div id="main-container" class="sub-container">
    <el-row>
      <el-col :span="24">
        <div class="promotion-txt">원하는 종목의 스포츠 팀을 구하고</div>
        <div class="promotion-txt">경기를 매칭해보세요 <emoji emoji="dart" :size="42" class="prmt-emoji"/></div>
      </el-col>
      <el-col>
        <carousel
            :type="'card'"
            :height="'320px'"
            :datas="[
                {title: '공지1', imgUrl: '../assets/img_notice_baseball.jpg'},
                {title: '공지2', imgUrl: '../assets/img_notice_baseball.jpg'},
                {title: '공지3', imgUrl: './assets/img_notice_baseball.jpg'}
            ]" />
      </el-col>
    </el-row>

    <el-row class="group-main-wait-team">
      <el-col :span="24" >
        <div class="block tit" span="4" offset="1">대기중인 팀</div>
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
import { Emoji } from 'emoji-mart-vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from "@/components/Carousel"
import BaseCard from "@/components/Card/BaseCard"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel,
    BaseCard,
    Emoji
  },
  data() {
    return {
      card1: [
        { id: '4', sport: 'bowling', team: '조선', title: '조선', location: '인천 어디구', startDate: '2020-12-01', img: '', regDate: new Date() },
        { id: '3', sport: 'volleyball', team: '동아', title: '동아', location: '인천 남동구', startDate: '2020-11-21', img: '', regDate: new Date() },
        { id: '2', sport: 'basketball', team: '기아', title: '기아', location: '서울 관악구', startDate: '2020-11-11', img: '', regDate: new Date() },
        { id: '1', sport: 'soccer', team: '금하', title: '금하', location: '서울 동작구', startDate: '2020-11-01', img: '', regDate: new Date() },
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
