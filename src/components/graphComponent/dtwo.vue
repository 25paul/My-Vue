<!-- 
坐标轴
https://g2.antv.vision/zh/docs/manual/concepts/component/axis
 -->
<template>
  <div class="d-one">
    <div>坐标轴</div>
    <div id="two"></div>
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
        container: 'two',  // 指定图表容器 ID
        autoFit: false,
        height: 300,  // 指定图表高度
        width: 400
      });

      // Step 2: 载入数据源
      chart.data(this.chartData);

      // 默认情况下，我们会为每条坐标轴生成标题，标题名默认为该轴对应数据字段的属性名。当需要为坐标轴设置别名时，则需要通过 chart.scale()  接口，为对应的 scale 度量设置 alias  别名属性来改变坐标轴标题。
      chart.scale('sales', {
        alias: '销量',
        // 坐标轴文本的内容同样也受 scale 度量的控制，G2 默认会生成所有的 label 内容
        // ticks: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],

        // 当需要对数值进行格式化时，也可以通过 chart.scale()  接口：
        // formatter: (val) => `￥${val}`,
        
        // 坐标轴的数值范围受数据的约束，同时也可以通过 chart.scale()  接口进行配置，每一种坐标轴数值范围的选择都会导致最后可视化结果的不同：
        // 跟上面的刻度值配置不兼容
        // min: 0,
        // max: 1000,
        // tickCount: 10,

        // 对于连续类型的数据，G2 还支持设置坐标轴刻度线的间距（tickInterval  属性），同样需要在 chart.scale()  中进行配置，但是需要说明的是，tickInterval  为原始数据值的差值，并且  tickCount  和  tickInterval  不可以同时声明。
        tickInterval: 100,
      });

      chart.scale('year', {
        range: [0.25, 0.75],
      });

      chart.axis('sales', {
        // 坐标轴的内容是由 scale 度量控制的，所以 scale 度量的名字控制着坐标轴的标题内容。 chart.axis()  只用于控制坐标轴的外观配置，在 G2 默认主题中，我们关闭了 title 的展示。
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