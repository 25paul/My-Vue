<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <map-label></map-label>
  </div>
</template>

<script>

// import HelloWorld from "./components/HelloWorld";
import MapLabel from './components/mapLabel.vue';

export default {
  name: "App",
  components: {
    // HelloWorld,
    MapLabel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
