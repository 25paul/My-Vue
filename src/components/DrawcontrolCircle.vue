<!-- 绘制组件--圆 -->
<template>
  <div id="draw-circle"></div>
</template>

<script>
import { Scene } from '@antv/l7';
import { DrawCircle } from '@antv/l7-draw';
import { GaodeMap } from '@antv/l7-maps';
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {
    const scene = new Scene({
      id: 'draw-circle',
      map: new GaodeMap({
        pitch: 0,
        style: 'light',
        center: [ 113.775374, 28.31067 ],
        zoom: 12
      })
    });
    scene.on('loaded', () => {
      const drawCircle = new DrawCircle(scene);
      console.log(drawCircle);
      drawCircle.enable();
      drawCircle.on('draw.create', e => {
        console.log(e);
      });
      drawCircle.on('draw.update', e => {
        console.log('update', e);
      });
    });

  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>