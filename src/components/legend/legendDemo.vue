<!-- 
legend图例
https://g2.antv.vision/zh/docs/manual/tutorial/legend
 -->
<template>
  <div class="d-one">
    <div>legend图例</div>
    <div id="legendDemo"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { year: 'Year 1800', region: 'Africa', population: 107 },
        { year: 'Year 1900', region: 'Africa', population: 133 },
        { year: 'Year 2012', region: 'Africa', population: 1052 },
        { year: 'Year 1800', region: 'America', population: 31 },
        { year: 'Year 1900', region: 'America', population: 156 },
        { year: 'Year 2012', region: 'America', population: 954 },
        { year: 'Year 1800', region: 'Asia', population: 635 },
        { year: 'Year 1900', region: 'Asia', population: 947 },
        { year: 'Year 2012', region: 'Asia', population: 4250 },
        { year: 'Year 1800', region: 'Europe', population: 203 },
        { year: 'Year 1900', region: 'Europe', population: 408 },
        { year: 'Year 2012', region: 'Europe', population: 740 },
        { year: 'Year 1800', region: 'Oceania', population: 2 },
        { year: 'Year 1900', region: 'Oceania', population: 6 },
        { year: 'Year 2012', region: 'Oceania', population: 38 },
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
        container: 'legendDemo',  // 指定图表容器 ID
        width: 600,
        height: 350,
        padding: [20, 90, 95, 80],
      });

      console.log('chart', chart);

      chart.source(this.chartData);
      // chart.coord().transpose();
      // chart.legend({
      //   title: null, // 不展示图例的标题
      //   marker: 'square', // 设置图例 marker 的显示样式
      // });
      chart.interval().position('region*population').color('year').label('population');
      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>