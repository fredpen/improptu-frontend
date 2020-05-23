
<script>
export default {
    created() {
        if (process.client) {
             let token = localStorage.setItem('token', 'sdsdsdsd');
            this.setUser();
        }
       
    },

    methods: {
        setUser() {
            let user = {name: 'fred', sex : 'male'};
            this.$store.commit("auth/setUser", user);
        },
    },
}
</script>