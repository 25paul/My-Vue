<!-- 
快速上手
https://g2.antv.vision/zh/docs/manual/getting-started
 -->
<template>
  <div class="d-one">
    <div>快速上手</div>
    <div id="one"></div>
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
        container: 'one',  // 指定图表容器 ID
        autoFit: true,
        height: 500,  // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(this.chartData);
      chart.scale('sales', {
        nice: true,
      });

      chart.tooltip({
        showMarkers: false
      });
      chart.interaction('active-region');

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