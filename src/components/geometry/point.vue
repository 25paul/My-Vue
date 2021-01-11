<!-- 
点图
https://g2.antv.vision/zh/docs/manual/concepts/geometry/point
 -->
<template>
  <div>
    <div>点图</div>
    <div id="point"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      // chartData: [{ carat: 10 }],
      // chartData: [{ month: '一月', temperature: 10 }],
      chartData: [{ month: '一月', temperature: [-5, 10] }]
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
        container: 'point',
        width: 500,
        height: 400
      })

      chart.data(this.chartData);

      // chart.point().position('carat');
      chart.point().position('month*temperature');

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>