<!-- https://observablehq.com/@d3/horizontal-bar-chart -->
<template>
  <div id="chart" ref="chart">
  </div>
</template>

<script>
import * as d3 from 'd3';
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
    this.init()
  },
  methods: {
    init () {
      const height = 500;
      const width = 800;
      // const data = [{"name":"T","value":0.09056},{"name":"A","value":0.08167},{"name":"E","value":0.12702},{"name":"O","value":0.07507},{"name":"I","value":0.06966},{"name":"N","value":0.06749},{"name":"S","value":0.06327},{"name":"H","value":0.06094},{"name":"R","value":0.05987},{"name":"D","value":0.04253},{"name":"L","value":0.04025},{"name":"C","value":0.02782},{"name":"U","value":0.02758},{"name":"M","value":0.02406},{"name":"W","value":0.0236},{"name":"F","value":0.02288},{"name":"G","value":0.02015},{"name":"Y","value":0.01974},{"name":"P","value":0.01929},{"name":"B","value":0.01492},{"name":"V","value":0.00978},{"name":"K","value":0.00772},{"name":"J","value":0.00153},{"name":"X","value":0.0015},{"name":"Q","value":0.00095},{"name":"Z","value":0.00074}]
      const margin = {top: 20, right: 0, bottom: 30, left: 40}
      const data = [{"name":"E","value":0.12702},{"name":"T","value":0.09056},{"name":"A","value":0.08167},{"name":"O","value":0.07507},{"name":"I","value":0.06966},{"name":"N","value":0.06749},{"name":"S","value":0.06327},{"name":"H","value":0.06094},{"name":"R","value":0.05987},{"name":"D","value":0.04253},{"name":"L","value":0.04025},{"name":"C","value":0.02782},{"name":"U","value":0.02758},{"name":"M","value":0.02406},{"name":"W","value":0.0236},{"name":"F","value":0.02288},{"name":"G","value":0.02015},{"name":"Y","value":0.01974},{"name":"P","value":0.01929},{"name":"B","value":0.01492},{"name":"V","value":0.00978},{"name":"K","value":0.00772},{"name":"J","value":0.00153},{"name":"X","value":0.0015},{"name":"Q","value":0.00095},{"name":"Z","value":0.00074}]
      
      const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr('width', width)
        .attr('height', height);

      this.chartRef.appendChild(svg.node());

      let x = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([margin.left, width - margin.right])

      let y = d3.scaleBand()
        .domain(d3.range(data.length))
        .rangeRound([margin.top, height - margin.bottom])
        .padding(0.1)

      let xAxis = g => g
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(x).ticks(width / 80, data.format))
        .call(g => g.select(".domain").remove())

      // tickFormat设置刻度格式
      let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0))

      svg.append("g")
        .call(xAxis);

      svg.append("g")
        .call(yAxis);

      svg.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", x(0))
        .attr("y", (d, i) => y(i))
        .attr("width", d => x(d.value) - x(0))
        .attr("height", y.bandwidth());

      //https://github.com/d3/d3-format/blob/v2.0.0/README.md#formatSpecifier
      var s = d3.formatSpecifier("%");
      s.precision = d3.precisionFixed(0.1);
      var format = d3.format(s);

      svg.append("g")
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("x", d => x(d.value))
        .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("dx", -4)
        .text(d => format(d.value))
        .call(text => text.filter(d => x(d.value) - x(0) < 20) // short bars
        .attr("dx", +4)
        .attr("fill", "black")
        .attr("text-anchor", "start"));

    }
  }
}
</script>
<style lang='scss' scoped>
</style>