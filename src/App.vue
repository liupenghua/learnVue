<template>
  <div id="app">
    <Headpart></Headpart>
    <div id="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Headpart from './components/head.vue'
export default {
  name: 'app',
  components: {
    Headpart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
}
</style>
