<template>
  <div id="app">
    <simple-pie v-if="false"></simple-pie>
    <simple-area v-if="false"></simple-area>
    <sortable-bar v-if="false"></sortable-bar>
    <horizontal-bar v-if="false"></horizontal-bar>
    <area-chart></area-chart>
  </div>
</template>

<script>
import SimplePie from './components/simplePie.vue';
import SimpleArea from './components/simpleArea.vue';
import SortableBar from './components/fromOfficial/sortableBar.vue';
import HorizontalBar from './components/fromOfficial/horizontalBar.vue';
import AreaChart from './components/fromOfficial/areaChart.vue';

export default {
  name: 'App',
  components: {
    SimplePie,
    SimpleArea,
    SortableBar,
    HorizontalBar,
    AreaChart
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
