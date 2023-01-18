const app= Vue.CreateApp({
    data(){
        return{
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
                name: 'MIshko Sredniq',
                phone: '5645645645456',
                email: 'Peshko@Dobriq.com',
            },
            
            
        ],
        }
    },
    methods:{},
});

app.nount('#app')