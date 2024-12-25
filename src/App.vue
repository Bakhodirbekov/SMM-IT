<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>


    <div class="wrapper">
  <nav class="flex flex-col justify-center items-center py-1.5 px-6 bg-white shadow-md rounded-md">
    <!-- Primary Links -->
    <div class="flex space-x-6">
      <RouterLink to="/" class="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300">
        Home
      </RouterLink>
      <RouterLink to="/about" class="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300">
        About
      </RouterLink>
      <RouterLink to="/projects" class="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300">
        Projects
      </RouterLink>
    </div>
  </nav>
</div>


  </header>

  <!-- Home.vue yoki boshqa route ni ko'rsatish -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
