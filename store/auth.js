export const state = () => ({
    user: "",
    rightDrawer: false
});

export const mutations = {
    setUser(state, user) {
        if (process.client) {
            localStorage.setItem("user", JSON.stringify(user));
            return (state.user = user);
        }
    },

    setRightDrawer(state) {
        return (state.rightDrawer = !state.rightDrawer);
    }
};
