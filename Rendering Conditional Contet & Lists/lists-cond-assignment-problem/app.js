const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            userInput: ''
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.userInput);
            this.userInput = '';
        }
    },
});


app.mount('#assignment');