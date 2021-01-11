<!-- 
滑块
https://g2.antv.vision/zh/docs/manual/concepts/component/slider

data-set: https://www.yuque.com/antv/g2-docs/tutorial-dataset
 -->
<template>
  <div>
    <div>滑块</div>
    <div id="five"></div>
  </div>
</template>

<script>
// import DataSet from '@antv/data-set';
// import { Chart } from '@antv/g2';

export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/rain-flow.json').then(res => {
      console.log(res.json());
    }).then(data => {
      console.log(data);
    })
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
