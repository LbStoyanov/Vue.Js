const app = Vue.createApp({
    data(){
        return{
            message: "Completed!",
            username: '',
            confirmedName: ''
        }
    },
    methods:{
        updateMessage(){
            alert(this.message);
        },
        setName(event){
            this.username = event.target.value;
        },
        confirmName(e){
          
            this.confirmedName = e.target.value;
        }
    }
});

app.mount('#assignment');