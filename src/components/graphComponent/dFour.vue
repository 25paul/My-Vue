<!-- 
图形标注
https://g2.antv.vision/zh/docs/manual/concepts/component/annotation
 -->
<template>
  <div>
    <div>图形标注</div>
    <div id="four"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data () {
    return {
      data: []
    };
  },
  components: {},
  computed: {
    time () {
      return Math.floor(new Date().getTime() / 1000) * 1000;
    }
  },
  watch: {},
  mounted () {
    for (let i = -19; i <= 0; i++) {
      this.data.push({
        time: this.time + i * 3 * 1000,
        value: Math.random() + 0.25,
      });
    }
    this.chart();
  },
  methods: {
    // 查找最大值
    findMax () {
      let maxValue = 0;
      let maxObj = null;
      this.data.forEach((obj) => {
        if (obj.value > maxValue) {
          maxValue = obj.value;
          maxObj = obj;
        }
      });
      return maxObj;
    },
    chart () {
      console.log(this.data);
      const chart = new Chart({
        // 创建图表
        container: 'four',
        autoFit: false,
        width: 500,
        height: 450,
      });
      chart.data(this.data.concat([]));
      chart.scale({
        time: {
          type: 'time',
          mask: 'HH:mm:ss',
        },
        value: {
          nice: true,
        },
      });
      chart.animate(false);
      chart.line().position('time*value');

      let self = this;
      chart.annotation().text({
        position() {
          const obj = self.findMax();
          return [obj.time, obj.value];
        },
        content: '最大值',
      });
      // let obj = self.findMax();
      // chart.annotation().text({
      //   position: [obj.time, obj.value],
      //   content: '最大值',
      // });

      chart.render();

      setInterval(function () {
        self.data.shift();
        self.data.push({
          time: new Date().getTime(),
          value: Math.random() + 0.25,
        });
        chart.changeData(self.data.concat([]));
        // chart.annotation().clear();
      }, 1000);
    }
  }
}
</script>
<style lang='scss' scoped>
</style>