<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <map-label></map-label>
    <!-- <path-animate></path-animate> -->
    <!-- <flow-diagram></flow-diagram> -->
    <!-- <city-build></city-build> -->
    <!-- <heatmap-honey /> -->
    <!-- <point-maker /> -->
    <!-- <country-fill/> -->
    <canvas id="canvas" width="500" height="200"></canvas>
  </div>
</template>

<script>
// import CountryFill from './components/CountryFill.vue';
// import HeatmapHoney from './components/HeatmapHoney.vue';
// import FlowDiagram from './components/FlowDiagram.vue';

// import HelloWorld from "./components/HelloWorld";
import MapLabel from './components/mapLabel.vue';
// import PathAnimate from './components/pathAnimate.vue';
// import PointMaker from './components/PointMaker.vue';
// import CityBuild from './components/CityBuild.vue';

export default {
  name: "App",
  components: {
    // CountryFill
    // HelloWorld,
    MapLabel,
    // PathAnimate,
    // PointMaker,
    // FlowDiagram,
    // CityBuild,
    // HeatmapHoney,
  },
  mounted () {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
  }
};
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 600px;
}
#canvas {
  position: absolute;
  left: 400px;
  user-select:none;
}
.amap-layers canvas {
  user-select: auto !important;
}
</style>
