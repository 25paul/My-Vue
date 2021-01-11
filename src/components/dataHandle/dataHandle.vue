<!-- 
G2 的数据处理流程
https://g2.antv.vision/zh/docs/manual/tutorial/data-flow
 -->
<template>
  <div>
    <div>G2 的数据处理流程</div>
    <div id="handle"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { month: '一月', temperature: 5, city: '北京' },
        { month: '二月', temperature: 10, city: '北京' },
        { month: '一月', temperature: 8, city: '南京' },
        { month: '二月', temperature: 14, city: '南京' }
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
        container: 'handle',
        width: 400,
        height: 200
      })
      console.log('chart', chart);

      // chart.data(this.chartData);
      chart.source(this.chartData);

      // 1. 将 month 映射到 position 位置图形属性的 x 轴方向；
      // 2. 将 temperature 映射到 position 位置图形属性的 y 轴方向；
      // 3. 将 city 映射到 color 颜色图形属性。使用的颜色是 ['#1890FF', '#2FC25B']
      chart.point().position('month*temperature').color('city', [ '#1890FF', '#2FC25B' ]);

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>