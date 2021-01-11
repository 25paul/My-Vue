<!-- 
提示信息
https://g2.antv.vision/zh/docs/manual/concepts/component/tooltip#%E5%86%85%E5%AE%B9%E9%85%8D%E7%BD%AE
 -->
<template>
  <div class="d-one">
    <div>提示信息</div>
    <div id="there"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
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
        container: 'there',  // 指定图表容器 ID
        autoFit: true,
        height: 500,  // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(this.chartData);
      chart.scale('sales', {
        min: 0,
        nice: true,
      });

      chart.scale('year', {
        range: [0, 1],
      });

      // chart.tooltip({
      //   showCrosshairs: true, // 展示 Tooltip 辅助线
      //   shared: true,
      // });

      // // chart.line().position('year*value');
      // chart.line().position('year*value').tooltip('year*value');
      // chart.render();

      // 还可以同 chart.tooltip() 接口的 itemTpl 属性结合
      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true,
        showTitle: false,
        itemTpl: '<li>{year} 有 {value} 个</li>',
      });

      chart
        .line()
        .position('year*value')
        .tooltip('year*value', (year, value) => {
          return {
            year: `${year} 年`,
            value: value,
          };
        })
        .label('value');
      chart.render();

      // tooltip 显示时触发
      chart.on('tooltip:show', (ev) => {
        // x: 当前鼠标的 x 坐标,
        // y: 当前鼠标的 y 坐标,
        // items: 数组对象，当前 tooltip 显示的每条内容
        // title: tooltip 标题
        const { items, title, x, y } = ev.data;
        console.log(items, title, x, y);
      });

      // tooltip 内容变更时触发
      chart.on('tooltip:change', (ev) => {
        // x: 当前鼠标的 x 坐标,
        // y: 当前鼠标的 y 坐标,
        // items: 数组对象，当前 tooltip 显示的每条内容
        // title: tooltip 标题
        const { items, title, x, y } = ev.data;
        console.log(items, title, x, y);
      });

      // tooltip 消失时触发
      chart.on('tooltip:hide', (ev) => {
        console.log(ev)
      });
    }
  }
}
</script>
<style lang='scss' scoped>
</style>