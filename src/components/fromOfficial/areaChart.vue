<!--  -->
<template>
  <div id="chart" ref="chart">
  </div>
</template>

<script>
import * as d3 from 'd3';
import { areaChart } from '../../chartdata/areaChart';
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {
    chartRef () {
      return this.$refs.chart;
    }
  },
  watch: {},
  mounted () {
    this.init();
  },
  methods: {
    init () {
      const height = 500;
      const width = 800;
      const margin = {top: 20, right: 0, bottom: 30, left: 40}
      const data = areaChart;
      
      const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr('width', width)
        .attr('height', height);

      this.chartRef.appendChild(svg.node());
console.log(d3.extent(data, d => d.date))
      let x = d3.scaleUtc()
        .domain([Date.now(), Date.now() + 24 * 60 * 60 * 1000])
        .range([margin.left, width - margin.right])

      let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top])
      
      let xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

      let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

      svg.append("g")
        .call(xAxis);

      svg.append("g")
        .call(yAxis);
    }
  }
}
</script>
<style lang='scss' scoped>
</style>