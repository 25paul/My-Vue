<!--https://observablehq.com/@d3/kernel-density-estimation  -->
<template>
  <div id="chart" ref="chart">
  </div>
</template>

<script>
import * as d3 from 'd3';
import { areaChart } from '../../chartdata/kernelDensityEstimation';
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

      // let x = d3.scaleLinear()
      //   .domain(d3.extent(data)).nice()
      //   .range([margin.left, width - margin.right])

      // let y = d3.scaleLinear()
      //   .domain([0, d3.max(bins, d => d.length) / data.length])
      //   .range([height - margin.bottom, margin.top])

      console.log(margin, data)
      
      // let xAxis = g => g
      //   .attr("transform", `translate(0,${height - margin.bottom})`)
      //   .call(d3.axisBottom(x))
      //   .call(g => g.append("text")
      //   .attr("x", width - margin.right)
      //   .attr("y", -6)
      //   .attr("fill", "#000")
      //   .attr("text-anchor", "end")
      //   .attr("font-weight", "bold")
      //   .text(data.title))

      // let yAxis = g => g
      //   .attr("transform", `translate(${margin.left},0)`)
      //   .call(d3.axisLeft(y).ticks(null, "%"))
      //   .call(g => g.select(".domain").remove())

      // svg.append("g")
      //   .call(xAxis);

      // svg.append("g")
      //   .call(yAxis);

    }
  }
}
</script>
<style lang='scss' scoped>
</style>