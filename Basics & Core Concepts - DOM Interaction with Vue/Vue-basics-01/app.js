const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<p>Master VueJS!</p>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNum = Math.random();

            if (randomNum < 0.5) {
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');