<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <!-- <map-label></map-label> -->
    <!-- <path-animate></path-animate> -->
    <!-- <flow-diagram></flow-diagram> -->
    <!-- <city-build></city-build> -->
    <!-- <heatmap-honey /> -->
    <!-- <point-maker /> -->
    <!-- <country-fill/> -->
    <!-- <drawcontrol-circle/> -->
    <!-- <drawcontrol-polygon/> -->
    <!-- <draw-control/> -->
    <cluster-chart/>
  </div>
</template>

<script>
import ClusterChart from './components/clusterChart.vue';
// import DrawControl from './components/DrawControl.vue';
// import CountryFill from './components/CountryFill.vue';
// import DrawcontrolCircle from './components/DrawcontrolCircle.vue';
// import DrawcontrolPolygon from './components/DrawcontrolPolygon.vue';
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
    // CountryFill,
    // DrawcontrolCircle,
    // DrawcontrolPolygon,
    // DrawControl,
    // HelloWorld,
    ClusterChart,
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
