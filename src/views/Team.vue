<template>
  <div id="team-container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="16">
<!--        :tab-position="'left'" // 모바일-->
        <el-tabs class="grid-content" v-model="activeName" :tab-position="'top'" @tab-click="handleClick">
          <el-tab-pane name="soccer">
            <span slot="label">축구<emoji emoji="soccer" :size="16" class="tabs-emoji"/></span>
            <el-row :gutter="12">
              <el-col :span="8">
                <el-card shadow="hover">
                  Hover
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover">
                  Hover
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover">
                  Hover
                </el-card>
              </el-col>
            </el-row>



          </el-tab-pane>
          <el-tab-pane name="baseball">
            <span slot="label">야구<emoji emoji="baseball" :size="16" class="tabs-emoji"/></span>
          </el-tab-pane>
          <el-tab-pane name="basketball">
            <span slot="label">농구<emoji emoji="basketball" :size="16" class="tabs-emoji"/></span>
          </el-tab-pane>
          <el-tab-pane name="volleyball">
            <span slot="label">배구<emoji emoji="volleyball" :size="16" class="tabs-emoji"/></span>
          </el-tab-pane>
          <el-tab-pane name="bowling">
            <span slot="label">볼링<emoji emoji="bowling" :size="16" class="tabs-emoji"/></span>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>


  </div>
</template>
<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  components: {
    Emoji
  },
  data() {
    return {
      activeName: 'soccer',
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
    }
  },
  methods: {
    handleClick() {

    }
  }
}
</script>
<style scoped>


</style>
