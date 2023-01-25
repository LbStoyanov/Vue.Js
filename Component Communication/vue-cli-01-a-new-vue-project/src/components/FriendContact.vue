<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  porps:[
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Manuel",
        personName: "Manuel Lorenzo",
        phone: "1545454545454554",
        email: "manu@abv.com",
      },
    };
  },
  methods: {
    toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
        //this.phoneNumber
    }
  }
};
</script>
