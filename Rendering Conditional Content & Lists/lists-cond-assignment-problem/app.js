const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            userInput: '',
            taskListIsVisible: true
        };
    },
    computed: {
        buttonCaption() {
            return this.taskListIsVisible ? 'Hide List' : 'Show List';
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.userInput);
            this.userInput = '';
        },
        toggleList(){
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
});


app.mount('#assignment');