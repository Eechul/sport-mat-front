
export default {
    login: (context) => {
        context.commit('login')
    },
    logout: (context) => {
        context.commit('logout')
    },
    isMenuActive: (context) => {
      context.commit('isMenuActive')
    },
    ctrlMenu: (context, payload) => {
        if(payload === undefined) {
            return context.commit('ctrlMenu')
        } else {
            return context.commit('ctrlMenu', payload)
        }
    }

}