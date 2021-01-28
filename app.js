const app = Vue.createApp({
    data() {
        return {
            hours: (new Date()).getHours(),
            message: '',
        }
    },
    methods: {
        getMessage() {
            if (this.hours > 17) {
                this.message = 'Good evening!'
            } else if (this.hours > 12) {
                this.message = 'Good afternoon!'
            } else {
                this.message = 'Good morning!'
            }
        }
    }
})

app.mount('#app')
