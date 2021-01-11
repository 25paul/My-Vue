<!-- 
区间图
https://g2.antv.vision/zh/docs/manual/concepts/geometry/interval
 -->
<template>
  <div>
    <div>区间图</div>
    <div id="interval"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      // chartData: [{ name: '分类一', value: 100 }]
      chartData: [{ name: '分类一', value: [10, 100] }]
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
        container: 'interval',
        width: 500,
        height: 400
      })

      chart.data(this.chartData);

      chart.interval().position('name*value');

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>