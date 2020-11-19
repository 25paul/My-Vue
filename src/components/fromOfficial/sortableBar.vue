<!--https://observablehq.com/@d3/sortable-bar-chart-->
<template>
  <div id="chart" ref="chart">
  </div>
</template>
<script>
import * as d3 from 'd3';
export default {
  name: 'simplePie',
  data() {
    return {
    };
  },
  computed: {
    chartRef () {
      return this.$refs.chart;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init () {
      const height = 500;
      const width = 800;
      const data = [{"name":"T","value":0.09056},{"name":"A","value":0.08167},{"name":"E","value":0.12702},{"name":"O","value":0.07507},{"name":"I","value":0.06966},{"name":"N","value":0.06749},{"name":"S","value":0.06327},{"name":"H","value":0.06094},{"name":"R","value":0.05987},{"name":"D","value":0.04253},{"name":"L","value":0.04025},{"name":"C","value":0.02782},{"name":"U","value":0.02758},{"name":"M","value":0.02406},{"name":"W","value":0.0236},{"name":"F","value":0.02288},{"name":"G","value":0.02015},{"name":"Y","value":0.01974},{"name":"P","value":0.01929},{"name":"B","value":0.01492},{"name":"V","value":0.00978},{"name":"K","value":0.00772},{"name":"J","value":0.00153},{"name":"X","value":0.0015},{"name":"Q","value":0.00095},{"name":"Z","value":0.00074}]
      const margin = {top: 20, right: 0, bottom: 30, left: 40}
      // console.log(d3.select(this.chartRef));
      // console.log(d3.create('svg'));
      // console.log(d3.create('svg').node());
      // 使用d3创建svg，设置属性
      const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);

      // svg.node() 可以获得是svg节点
      this.chartRef.appendChild(svg.node());

      let x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1)
      
      console.log(x('A'))

      let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top])
      
      let xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))

      let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
      
      svg.append("g")
        .call(xAxis);

      svg.append("g")
        .call(yAxis);

      svg.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .style("mix-blend-mode", "multiply")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth());

      // this.chartRef.appendChild(svg.node());

    }
  },
};
</script>
<style lang="scss" scoped>
</style>