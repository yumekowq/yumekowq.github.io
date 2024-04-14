new Vue({
    methods: {
        showNotification() {
            this.$notify({
                title: "你已被发现😜",
                message: "小伙子，扒源记住要遵循GPL协议！",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "warning",
                duration: 5000
            });
        }
    }
});
