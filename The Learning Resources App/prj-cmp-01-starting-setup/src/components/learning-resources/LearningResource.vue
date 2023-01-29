<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
      </header>
      <button>Delete</button>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
};
</script>

<style scoped></style>
