<template>
  <div id="app">
    <simple-pie></simple-pie>
    <simple-area></simple-area>
  </div>
</template>

<script>
import SimplePie from './components/simplePie.vue';
import SimpleArea from './components/simpleArea.vue';

export default {
  name: 'App',
  components: {
    SimplePie,
    SimpleArea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
