<template>
  <div id="app">
    <simple-pie v-if="false"></simple-pie>
    <simple-area v-if="false"></simple-area>
    <sortable-bar v-if="true"></sortable-bar>
    <horizontal-bar v-if="false"></horizontal-bar>
    <area-chart v-if="false"></area-chart>
    <area-with-missing-data v-if="false"></area-with-missing-data>
    <kernel-density-estimation v-if="false"></kernel-density-estimation>
    <line-chart v-if="false"></line-chart>
    <pie-chart v-if="false"></pie-chart>
    <donut-chart v-if="false"></donut-chart>
  </div>
</template>

<script>
import SimplePie from './components/simplePie.vue';
import SimpleArea from './components/simpleArea.vue';
import SortableBar from './components/fromOfficial/sortableBar.vue';
import HorizontalBar from './components/fromOfficial/horizontalBar.vue';
import AreaChart from './components/fromOfficial/areaChart.vue';
import AreaWithMissingData from './components/fromOfficial/areaWithMissingData.vue';
import KernelDensityEstimation from './components/fromOfficial/kernelDensityEstimation.vue';
import LineChart from './components/fromOfficial/lineChart.vue';
import PieChart from './components/fromOfficial/pieChart.vue';
import DonutChart from './components/fromOfficial/donutChart.vue';

export default {
  name: 'App',
  components: {
    SimplePie,
    SimpleArea,
    SortableBar,
    HorizontalBar,
    AreaChart,
    AreaWithMissingData,
    KernelDensityEstimation,
    LineChart,
    PieChart,
    DonutChart
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
