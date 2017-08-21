<template>
  <div id="app">
    <Headpart></Headpart>
    <router-view></router-view>
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
</style>
