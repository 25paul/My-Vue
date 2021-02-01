<!-- 路径动画 -->
<template>
  <div>
    <div id="path-animate"></div>
  </div>
</template>
<script>
import { Scene, LineLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
export default {
  data() {
    return {};
  },
  mounted() {
    const scene = new Scene({
      id: 'path-animate',
      map: new GaodeMap({
        center: [ 120.19382669582967, 30.258134 ],
        pitch: 0,
        zoom: 16,
        style: 'dark'
      })
    });
    scene.on('loaded', () => {
      fetch(
        'https://gw.alipayobjects.com/os/basement_prod/40ef2173-df66-4154-a8c0-785e93a5f18e.json'
      )
        .then(res => res.json())
        .then(data => {
          const layer = new LineLayer()
            .source(data)
            .size(1.5)
            .shape('line')
            .color('#25d8b7')
            .animate({
              interval: 1, // 间隔
              duration: 1, // 持续时间，延时
              trailLength: 2 // 流线长度
            });
          scene.addLayer(layer);
        });
    });
  }
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}

html,
body {
  overflow: hidden;
  margin: 0;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 400px;
}
</style>