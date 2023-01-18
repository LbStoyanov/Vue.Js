const app = Vue.createApp({
    data(){
        return{
            detailsAreVisible: false,

            friends: [{
                id: 'Peshko',
                name: 'Peshko Dobriq',
                phone: '5645645645456',
                email: 'Peshko@Dobriq.com',
            },
            {
                id: 'Goshko',
                name: 'Goshko Loshiq',
                phone: '5645645645456',
                email: 'Peshko@Dobriq.com',
            },
            {
                id: 'Mishko',
                name: 'Mishko Sredniq',
                phone: '5645645645456',
                email: 'Peshko@Dobriq.com',
            },
            
            
        ],
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});

app.mount('#app')