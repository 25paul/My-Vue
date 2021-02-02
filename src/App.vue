<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <!-- <map-label></map-label> -->
    <!-- <path-animate></path-animate> -->
    <!-- <flow-diagram></flow-diagram> -->
    <!-- <city-build></city-build> -->
    <!-- <heatmap-honey /> -->
    <!-- <point-maker /> -->
    <country-fill/>
  </div>
</template>

<script>
import CountryFill from './components/CountryFill.vue';
// import HeatmapHoney from './components/HeatmapHoney.vue';
// import FlowDiagram from './components/FlowDiagram.vue';

// import HelloWorld from "./components/HelloWorld";
// import MapLabel from './components/mapLabel.vue';
// import PathAnimate from './components/pathAnimate.vue';
// import PointMaker from './components/PointMaker.vue';
// import CityBuild from './components/CityBuild.vue';

export default {
  name: "App",
  components: {
    CountryFill
    // HelloWorld,
    // MapLabel,
    // PathAnimate,
    // PointMaker,
    // FlowDiagram,
    // CityBuild,
    // HeatmapHoney,
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
