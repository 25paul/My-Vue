<!-- 
区域图
https://g2.antv.vision/zh/docs/manual/concepts/geometry/area
 -->
<template>
  <div>
    <div>区域图</div>
    <div id="area"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { month: '一月', temperature: 10, city: '北京' },
        { month: '一月', temperature: 15, city: '南京' },
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
        container: 'area',
        width: 500,
        height: 400
      })

      chart.data(this.chartData);

      chart.area().position('month*temperature').color('city');

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>