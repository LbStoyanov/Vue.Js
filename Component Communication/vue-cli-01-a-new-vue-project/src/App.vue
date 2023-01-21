<!-- eslint-disable vue/valid-template-root -->

<template>
    <h2>My Friends</h2>
    <ul>
        <li></li>
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
