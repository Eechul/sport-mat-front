<template>
  <div id="team-container" class="sub-container">
    <el-row>
      <el-col :span="24">
        <el-tabs class="grid-content" v-model="activeName" :tab-position="'left'" @tab-click="handleClick" style="width: 100%;">
          <el-tab-pane name="soccer">
            <span slot="label"><span class="sport-name">축구</span><emoji emoji="soccer" :size="16" class="tabs-emoji"/></span>
            <el-row :gutter="6"  >
              <el-scrollbar wrap-style="height: calc(100vh - 70px);" :native="false">
<!--                <el-tag v-for="data in datas" :key="data.id"-->
<!--                        type="info"-->
<!--                        size="medium"-->
<!--                        style="margin-right: 5px">{{data.sport}}</el-tag>-->
                <el-col :span="cardSpan" v-for="data in datas" :key="data.id">
                  <base-card
                      :data="data"
                      :type="'normal'"
                      :hidden="{sport: true, title: true, regDate: true}"
                  />
                </el-col>
                <Infinite-loading :loadFunc="testLoad"></Infinite-loading>
              </el-scrollbar>
              
            </el-row>
          </el-tab-pane>
          <el-tab-pane name="baseball">
            <span slot="label"><span class="sport-name">야구</span><emoji emoji="baseball" :size="16" class="tabs-emoji"/></span>
            <el-row :gutter="6">
              <el-col :span="cardSpan" v-for="data in datas" :key="data.id">
                <base-card
                    :data="data"
                    :type="'normal'"
                    :hidden="{sport: true, title: true, regDate: true}"
                />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane name="basketball">
            <span slot="label"><span class="sport-name">농구</span><emoji emoji="basketball" :size="16" class="tabs-emoji"/></span>
            <el-row :gutter="6">
              <el-col :span="cardSpan" v-for="data in datas" :key="data.id">
                <base-card
                    :data="data"
                    :type="'normal'"
                    :hidden="{sport: true, title: true, regDate: true}"
                />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane name="volleyball">
            <span slot="label"><span class="sport-name">배구</span><emoji emoji="volleyball" :size="16" class="tabs-emoji"/></span>
            <el-row :gutter="6">
              <el-col :span="cardSpan" v-for="data in datas" :key="data.id">
                <base-card
                    :data="data"
                    :type="'normal'"
                    :hidden="{sport: true, title: true, regDate: true}"
                />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane name="bowling">
            <span slot="label"><span class="sport-name">볼링</span><emoji emoji="bowling" :size="16" class="tabs-emoji"/></span>
            <el-row :gutter="6">
              <el-col :span="cardSpan" v-for="data in datas" :key="data.id">
                <base-card
                    :data="data"
                    :type="'normal'"
                    :hidden="{sport: true, title: true, regDate: true}"
                />
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>


  </div>
</template>
<script>
import { Emoji } from 'emoji-mart-vue'
import BaseCard from "@/components/card/BaseCard";
import InfiniteLoading from "@/components/loading/InfiniteLoading";

export default {
  components: {
    Emoji,
    BaseCard,
    InfiniteLoading
  },
  data() {
    return {
      count: 0,
      activeName: 'soccer',
      datas: [
      { id: '5', sport: 'soccer', team: '금하', title: '금하', location: '서울 동작구', startDate: '2020-11-01', img: '', regDate: new Date() },
      { id: '4', sport: 'bowling', team: '조선', title: '조선', location: '인천 어디구', startDate: '2020-12-01', img: '', regDate: new Date() },
      { id: '3', sport: 'volleyball', team: '동아', title: '동아', location: '인천 남동구', startDate: '2020-11-21', img: '', regDate: new Date() },
      { id: '2', sport: 'basketball', team: '기아', title: '기아', location: '서울 관악구', startDate: '2020-11-11', img: '', regDate: new Date() },
      { id: '1', sport: 'soccer', team: '금하', title: '금하', location: '서울 동작구', startDate: '2020-11-01', img: '', regDate: new Date() },
    ],
      cardSpan: 8
    }
  },
  mounted() {
    this.changeSpan(window.innerWidth)
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    changeSpan(currWidth) {
      if(currWidth < 420) {
        this.cardSpan = 24
      }else if(currWidth < 820) {
        this.cardSpan = 12
      } else {
        this.cardSpan = 8
      }
    },
    handleResize() {
      this.changeSpan(window.innerWidth)
    },
    handleClick() {

    },
    goTeamDetail() {
      // console.log('22')
    },
    testLoad() {
      console.log('test Load');
    }
  }
}
</script>
<style scoped>


</style>
