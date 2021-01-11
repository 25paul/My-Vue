<!-- 
图形元素
https://g2.antv.vision/zh/docs/manual/concepts/element#集合数据对应的-element
 -->
<template>
  <div>
    <div>图形元素</div>
    <div id="element"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
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
        container: 'element',
        width: 500,
        height: 400,
        renderer: 'svg'
      })

      chart.data(this.chartData);

      const interval = chart.interval().position('name*value');

      console.log(interval);

      chart.render();

      // 1. 如何获取 Element 实例
      // 获取 Interval 下的 Element 实例
      const elements = interval.elements;
      console.log('element', elements)
      // 根据特定的条件查找 Element 实例
      const someElements = interval.getElementsBy((element) => {
        console.log(element.getData())
        const data = element.getData();
        return data.name === '分类一';
      });
      console.log('someElements', someElements);

      // 2. 通过 Element 操纵图形状态
      // 将 Interval 的第一个 Element 实例设置为 active 状态
      interval.elements[0].setState('active', false);

      // 3. 修改 Element 图形元素的状态样式
      interval.state({
        active: {
          style: {
            lineWidth: 2,
            stroke: '#000',
          },
        },
      });
    }
  }
}
</script>
<style lang='scss' scoped>
</style>