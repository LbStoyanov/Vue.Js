const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    confirmName(){
      this.confirmedName = this.name;
    },
    //Tambien podemos pasar un parametro a estos metodos, si es necesario!!!
    submitForm(){
      //e.preventDefault(); => Vanilla JS
      //v-on:submit.prevent => VueJS (html modifier!!!)
      alert('Submitted!')
    },
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
