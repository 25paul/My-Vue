<!-- 
Scale度量
https://g2.antv.vision/zh/docs/manual/tutorial/scale
 -->
<template>
  <div class="d-one">
    <div>Scale度量</div>
    <div id="scale"></div>
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
    getTicks (scale) {
      const { min, max, tickCount } = scale;
      const avg = (max - min) / tickCount;
      const ticks = [];
      for (let i = min; i <= max; i += avg) {
        ticks.push(i-100);
      }
      console.log('ticks', ticks);
      return ticks;
    },
    chart () {
      const chart = new Chart({
        container: 'scale',  // 指定图表容器 ID
        height: 500,  // 指定图表高度
        width: 400
      });

      // Step 2: 载入数据源
      chart.data(this.chartData);

      // scale度量
      // chart.scale('sales', {
      //   nice: true,
      //   min: 0,
      //   max: 100
      // });
      // chart.scale('year', {
      //   nice: true,
      // });
      chart.scale({
        'sales': {
          nice: true,
          min: 0,
          max: 500,
          // type: 'log'   // 度量类型
          // alias: 'sales',
          // tickCount: 10,
          // tickMethod: this.getTicks
          // tickInterval: 50
          type: 'log',
          base: 5,
        },
        'year': {
          // values: ["1951 ", "1952", "1956 年", "1957 年", "1958 年", "1959 年", "1960 年", "1962 年"]
        }
      })

      // const getScale = chart.getScalesByDim('sales');
      // console.log(getScale)
      // getScale.max = 200

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

      // 获取度量的方法： 图表渲染后才可以拿到
      const getScale = chart.getScalesByDim('sales');
      const getyScale = chart.getScaleByField('year');
      console.log(getyScale)
      console.log(getScale)
      // getyScale.scale('1992');
      // getyScale.invert(0.2);
      // getyScale.getText('1992');
      console.log(getyScale.scale('1952 年'))
      console.log(getyScale.invert(0.1875))
      console.log(getyScale.getText('1952 年'))
    }
  }
}
</script>
<style lang='scss' scoped>
</style>