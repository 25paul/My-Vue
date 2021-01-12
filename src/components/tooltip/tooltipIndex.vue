<!-- 
Tooltip 提示信息
https://g2.antv.vision/zh/docs/manual/tutorial/tooltip
 -->
<template>
  <div class="d-one">
    <div>Tooltip 提示信息</div>
    <div id="tooltip"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { year: 'Year 1800', region: 'Africa', population: 107 },
        { year: 'Year 1900', region: 'Africa', population: 133 },
        { year: 'Year 2012', region: 'Africa', population: 1052 },
        { year: 'Year 1800', region: 'America', population: 31 },
        { year: 'Year 1900', region: 'America', population: 156 },
        { year: 'Year 2012', region: 'America', population: 954 },
        { year: 'Year 1800', region: 'Asia', population: 635 },
        { year: 'Year 1900', region: 'Asia', population: 947 },
        { year: 'Year 2012', region: 'Asia', population: 4250 },
        { year: 'Year 1800', region: 'Europe', population: 203 },
        { year: 'Year 1900', region: 'Europe', population: 408 },
        { year: 'Year 2012', region: 'Europe', population: 740 },
        { year: 'Year 1800', region: 'Oceania', population: 2 },
        { year: 'Year 1900', region: 'Oceania', population: 6 },
        { year: 'Year 2012', region: 'Oceania', population: 38 },
      ]
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {
    this.chart();
  },
  methods: {
    chart () {
      const chart = new Chart({
        container: 'tooltip',  // 指定图表容器 ID
        width: 600,
        height: 350,
        padding: [20, 90, 95, 80],
      });

      console.log('chart', chart);

      // chart.tooltip({
      //   triggerOn: 'mousemove' | 'click' | 'none', // tooltip 的触发方式，默认为 mousemove
      //   showTitle: true, // 是否展示 title，默认为 true
      //   crosshairs: {
      //     type: 'rect' || 'x' || 'y' || 'cross',
      //     style: {
      //       // 图形样式
      //     }
      //   }, // tooltip 辅助线配置
      //   offset: 10, // tooltip 距离鼠标的偏移量
      //   containerTpl: '<div class="g2-tooltip">'
      //     + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
      //     + '<ul class="g2-tooltip-list"></ul></div>', // tooltip 容器模板
      //   itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>', // tooltip 每项记录的默认模板
      //   inPlot: true, // 将 tooltip 展示在指定区域内
      //   follow: true, // tooltip 是否跟随鼠标移动
      //   shared: true || false, // 默认为 true, false 表示只展示单条 tooltip
      //   position: 'left' || 'right' || 'top' || 'bottom' // 固定位置展示 tooltip
      // });

      chart.source(this.chartData);
      chart.interval().position('region*population').color('year').label('population');
      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>