<!-- 
Tooltip 提示信息
https://g2.antv.vision/zh/docs/manual/tutorial/tooltip#%E6%94%B9%E5%8F%98-tooltip-%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F
 -->
<template>
  <div class="d-one">
    <div>Tooltip 提示信息</div>
    <div id="tooltip-three"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      chartData: [
        { time: '2016-10-25 00:00:00', runCount: 4, type: 2, runTime: 2 },
        { time: '2016-10-25 00:30:00', runCount: 2, type: 6, runTime: 3 },
        { time: '2016-10-25 01:00:00', runCount: 13, type: 2, runTime: 5 },
        { time: '2016-10-25 01:30:00', runCount: 9, type: 9, runTime: 1 },
        { time: '2016-10-25 02:00:00', runCount: 5, type: 2, runTime: 3 },
        { time: '2016-10-25 02:30:00', runCount: 8, type: 2, runTime: 1 },
        { time: '2016-10-25 03:00:00', runCount: 13, type: 1, runTime: 2 },
        { time: '2016-10-25 03:30:00', runCount: 4, type: 2, runTime: 2 },
        { time: '2016-10-25 04:00:00', runCount: 2, type: 6, runTime: 3 },
        { time: '2016-10-25 04:30:00', runCount: 13, type: 2, runTime: 5 },
        { time: '2016-10-25 05:00:00', runCount: 9, type: 9, runTime: 1 },
        { time: '2016-10-25 05:30:00', runCount: 5, type: 2, runTime: 3 }
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
        container: 'tooltip-three',  // 指定图表容器 ID
        forceFit: true,
        height: 300,
        width: 600,
        padding: [ 50, 80 ]
      });

      console.log('chart', chart);

      chart.source(this.chartData);

      chart.scale('time',{
        type: 'timeCat',
        mask: 'HH:MM',
        tickCount:12,
        nice:true,
      });
      chart.scale('runCount', {
        alias: '运行数量',
        min: 0
      });
      chart.scale('runTime', {
        alias: '运行时间(ms)'
      });
      chart.tooltip({
        triggerOn: 'click' // 鼠标点击触发 tooltip
      }); // 关闭 tooltip
      chart.legend(false); // 不显示图例

      chart.line()
        .position('time*runTime')
        .color('#5ed470')
        .size(2)
        .shape('smooth'); // 绘制曲线图

      chart.point()
        .position('time*runTime')
        .color('#5ed470')
        .size(5)
        .shape('circle')
        .style({
          cursor: 'pointer'
        }); // 绘制点图

      chart.render();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>