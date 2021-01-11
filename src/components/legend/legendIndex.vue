<!-- 
legend图例
https://g2.antv.vision/zh/docs/manual/tutorial/legend
 -->
<template>
  <div class="d-one">
    <div>legend图例</div>
    <div id="legend"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { year: '1951 年', sales: 38 },
        { year: '1952 年', sales: 52 },
        { year: '1956 年', sales: 61 },
        { year: '1957 年', sales: 145 },
        { year: '1958 年', sales: 48 },
        { year: '1959 年', sales: 38 },
        { year: '1960 年', sales: 38 },
        { year: '1962 年', sales: 38 },
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
        container: 'legend',  // 指定图表容器 ID
        height: 500,  // 指定图表高度
        width: 400
      });

      // Step 2: 载入数据源
      chart.data(this.chartData);

      // scale度量
      chart.scale('sales', {
        nice: true,
        min: 0,
      });
      chart.scale('year', {
        nice: true,
      });

      chart.tooltip({
        showMarkers: false
      });
      chart.interaction('active-region');

      chart.axis('x', {
        title: {
          style: {
            fill: '#1890ff',
          },
        },
      });

      // Step 3: 创建图形语法，绘制柱状图
      chart.interval().position('year*sales');

      // Step 4: 渲染图表
      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>