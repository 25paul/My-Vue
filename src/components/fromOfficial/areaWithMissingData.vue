<!--  -->
<template>
  <div id="chart" ref="chart">
  </div>
</template>

<script>
import * as d3 from 'd3';
import { areaChart } from '../../chartdata/areaWithMissingData';
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
        .domain(d3.extent(data, d => new Date(d.date)))
        .range([margin.left, width - margin.right])
      // let x = d3.scaleTime()
      //   .domain([Date.now(), Date.now() + 21 * 60 * 60 * 1000]).nice()
      //   .range([margin.left, width - margin.right])

      let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top])
      
      let xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 40).tickSizeOuter(0))

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


      // x坐标轴的日期为什么格式，这里在画区域的时候就要用什么格式
      // 当数据太多难找错时，可以把数据截掉一部分
      // let curve = d3.curveLinear
      console.log(data);
      let area = d3.area()
        .defined(d => !isNaN(d.value))
        .x(d => x(new Date(d.date)))
        .y0(y(0))
        .y1(d => y(d.value))

      // 省略的话默认是灰色，也可以自己设置
      svg.append("path")
        .datum(data.filter(area.defined()))
        .attr("fill", "#ff000c")
        .attr("d", area);

      svg.append("path")
        .datum(data)
        .attr("fill", "steelblue")
        .attr("d", area);

    }
  }
}
</script>
<style lang='scss' scoped>
</style>