<!-- 
Tooltip 提示信息
https://g2.antv.vision/zh/docs/manual/tutorial/tooltip#使用-geomtooltip-回调
 -->
<template>
  <div class="d-one">
    <div>Tooltip 提示信息</div>
    <div id="tooltip-two"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { name: 'Microsoft Internet Explorer', value: 30 },
        { name: 'Chrome', value: 20 },
        { name: 'Firefox', value: 10 },
        { name: 'Safari', value: 10 },
        { name: 'Opera', value: 15 },
        { name: 'Others', value: 15 }
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
        container: 'tooltip-two',  // 指定图表容器 ID
        width: 600,
        height: 350,
        padding: [20, 90, 95, 80],
      });

      console.log('chart', chart);

      chart.source(this.chartData);

      chart.coord('theta', { innerRadius: 0.6, radius: 0.8 });

      chart.tooltip({
        showTitle: false,
        itemTpl: '<li>{name}: {value}</li>'
      });

      chart.interval()
        .adjust('stack')
        .position('value')
        .color('name')
        // .shape('slice-shape')
        .tooltip('name*value', (name, value) => {
          return {
            name: name,
            value: value + '%'
          };
        });

      // chart.interaction('element-active');

      chart.render();

      chart.on('tooltip:change', function(ev) {
        console.log(ev);
      })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>