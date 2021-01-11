<!-- 
多边形
https://g2.antv.vision/zh/docs/manual/concepts/geometry/polygon
 -->
<template>
  <div>
    <div>多边形</div>
    <div id="polygon"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [{ name1: 'a' }, { name1: 'b' }]
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
        container: 'polygon',
        width: 500,
        height: 400
      })

      chart.data(this.chartData);

      chart.polygon().position('from*to')

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>