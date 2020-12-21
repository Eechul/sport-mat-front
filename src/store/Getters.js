
export default {
    getLoginStatus: (state) => {
        return state.login
    },
    getIsMisspassView: (state) => {
        return state.isMisspassView
    },
    getSideActive: (state) => {
        return state.view.isMenuActive
    }
}