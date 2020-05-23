export const state = () => ({
    user: '',
})

export const mutations = {
    setUser(state, user) {
        if (process.client) {
            localStorage.setItem('user', JSON.stringify(user));
            return state.user = user;
        }
        
       
    },
}