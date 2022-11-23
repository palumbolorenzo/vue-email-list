new Vue ({
    el: '#app',
    data: {
        mail: [],
    },
    methods: {
        getMail(){
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(axiosResponse => {
                    console.log(axiosResponse);
                    this.mail = axiosResponse.data.response;
                })
            }
        }
    }
})