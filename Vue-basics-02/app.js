const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    //Tambien podemos pasar un parametro a estos metodos, si es necesario!!!
    increaseCounter(){
      this.counter++;
    },
    decreaseCounter(){
      this.counter--;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
