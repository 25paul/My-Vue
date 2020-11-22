<!--https://observablehq.com/@d3/donut-chart  -->
<template>
  <div id="chart" ref="chart">
  </div>
</template>

<script>
import * as d3 from 'd3';
import { areaChart } from '../../chartdata/pieChart';
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
      // const margin = {top: 20, right: 0, bottom: 30, left: 40}
      const data = areaChart;
      
      const svg = d3.create("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr('width', width)
        .attr('height', height);

      this.chartRef.appendChild(svg.node());

      let color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

      let minHeight = Math.min(width, 500)

      let arc = () => {
        const radius = Math.min(width, minHeight) / 2;
        return d3.arc().innerRadius(radius * 0.67).outerRadius(radius - 1);
      }

      // let arcLabel = () => {
      //   const radius = Math.min(width, height) / 2 * 0.8;
      //   return d3.arc().innerRadius(radius).outerRadius(radius);
      // }

      let pie = d3.pie()
        .padAngle(0.005)
        .sort(null)
        .value(d => d.value)

      const arcs = pie(data);

      svg.selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc())
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

      svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", d => `translate(${arc().centroid(d)})`)
        .call(text => text.append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text(d => d.data.name))
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text(d => d.data.value.toLocaleString()));
    }
  }
}
</script>
<style lang='scss' scoped>
</style>