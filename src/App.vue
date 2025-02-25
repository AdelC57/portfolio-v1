<template>
  <Header />
  <router-view/>
  <FooterComponent />
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: rgb(247, 247, 247);
}

main {
  margin-top: 80px; /* Pour compenser le header fixe */
}
</style>