new Vue ({
    el: '#app',
    data: {
        mail: 0,
    },
    methods: {
        getMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(axiosResponse => {
                    console.log(axiosResponse);
                    this.mail = axiosResponse.data.response;
                })
        }
    }
})