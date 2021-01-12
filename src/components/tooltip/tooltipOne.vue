<!-- 
Tooltip 提示信息
https://g2.antv.vision/zh/docs/manual/tutorial/tooltip#指定-tooltip-的显示信息
 -->
<template>
  <div class="d-one">
    <div>Tooltip 提示信息</div>
    <div id="tooltip-one"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { month: 0, tem: 7, city: 'tokyo' },
        { month: 1, tem: 6.9, city: 'tokyo' },
        { month: 2, tem: 9.5, city: 'tokyo' },
        { month: 3, tem: 14.5, city: 'tokyo' },
        { month: 4, tem: 18.2, city: 'tokyo' },
        { month: 5, tem: 21.5, city: 'tokyo' },
        { month: 6, tem: 25.2, city: 'tokyo' },
        { month: 7, tem: 26.5, city: 'tokyo' },
        { month: 8, tem: 23.3, city: 'tokyo' },
        { month: 9, tem: 18.3, city: 'tokyo' },
        { month: 10, tem: 13.9, city: 'tokyo' },
        { month: 11, tem: 9.6, city: 'tokyo' }
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
        container: 'tooltip-one',  // 指定图表容器 ID
        width: 600,
        height: 350,
        padding: [20, 90, 95, 80],
      });

      const defs = {
        'month':{
          type: 'cat',
          alias: '月份', // 别名，如果没有别名显示成字段名 month
          values: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        },
        'tem': {
          alias: '温度'
        }
      };

      chart.scale({
        'month':{
          type: 'cat',
          alias: '月份', // 别名，如果没有别名显示成字段名 month
          values: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        },
        'tem': {
          alias: '温度'
        }
      })

      console.log('chart', chart);

      chart.source(this.chartData, defs);

      chart.tooltip({
        showTitle: false, // 默认标题不显示
        itemTpl: '<li>{month}月: 温度为 {tem}</li>'
      });

      // chart.line().position('month*tem').tooltip('month*tem');
      chart.line().position('month*tem').tooltip('month*tem', (month, tem) => {
        console.log(month, tem);
        return {
          month,
          tem
        }
      });

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>