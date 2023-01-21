<template>
    <h2>My Friends</h2>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
</template>

<script>

export default {
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenzo",
          phone: "1545454545454554",
          email: "manu@abv.com",
        },
        {
          id: "Konchev",
          name: "Manuel Konchev",
          phone: "1545454545454554",
          email: "konchev@abv.com",
        },
      ],
    };
  },
};
</script>
