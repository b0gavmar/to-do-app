<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2>To Do App</h2>
    <nav>
      <RouterLink to="/tasks">Tasks</RouterLink>
      <RouterLink to="/newtask">New Task</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header{
  color: rgb(47, 223, 85); 
  background-color: rgb(34, 34, 34);
  text-decoration: none;
  border-radius: 20px;
  padding: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a:link, a:visited{
  color: rgb(140, 218, 157);
  text-decoration: none;
}

a:hover{
  color: rgb(230, 193, 28);
}

nav {
  width: 100%;
  font-size: 20px;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
