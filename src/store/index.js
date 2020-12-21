import Vue from 'vue'
import Vuex from 'vuex'
import Getters from "@/store/Getters";
import Mutations from "@/store/Mutations";
import Actions from "@/store/Actions";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // login: {
    //   status: 'logout'
    // },
    login: 'logout',
    view: {
      isMisspassView: false,
      isMenuActive: false
    }
  },
  getters: Getters,
  mutations: Mutations,
  actions: Actions,

  modules: {
  }
})
