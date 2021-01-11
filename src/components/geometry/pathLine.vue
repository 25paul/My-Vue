<!-- 
路径和线
https://g2.antv.vision/zh/docs/manual/concepts/geometry/path-and-line
 -->
<template>
  <div>
    <div>路径和线</div>
    <div id="line"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { month: '一月', temperature: [-5, 10] },
        { month: '二月', temperature: [3, 12] },
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
        container: 'line',
        width: 500,
        height: 400
      })

      chart.data(this.chartData);

      chart.line().position('month*temperature');

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>