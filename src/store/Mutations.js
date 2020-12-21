
export default {
    login: (state) => state.login = "login",
    logout: (state) => state.login = "logout",
    isMenuActive: (state) => state.view.isMenuActive,
    ctrlMenu: (state, payload) => {
        if(payload && payload.by === 'open') {
            state.view.isMenuActive = true
        } else if(payload && payload.by === 'close') {
            state.view.isMenuActive = false
        } else {
            state.view.isMenuActive = !state.view.isMenuActive
        }
    }
}