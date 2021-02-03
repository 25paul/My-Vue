<!-- 聚合图 -->
<template>
  <div id="cluster"></div>
</template>

<script>
import { Scene, PointLayer } from '@antv/l7';
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
      id: 'cluster',
      map: new GaodeMap({
        center: [ 120.19382669582967, 30.258134 ],
        pitch: 0,
        style: 'dark',
        zoom: 3
      })
    });
    scene.on('loaded', () => {
      fetch('https://gw.alipayobjects.com/os/basement_prod/d3564b06-670f-46ea-8edb-842f7010a7c6.json')
        .then(res => res.json())
        .then(data => {
          const pointLayer = new PointLayer({})
            .source(data, {
              cluster: true,
            })
            .shape('circle')
            .scale('point_count', {
              type: 'quantile'
            })
            .size('point_count', [ 5, 10, 15, 20, 25 ])
            .active(true)
            .color('yellow')
            .style({
              opacity: 0.5,
              strokeWidth: 1
            });
          console.log(pointLayer);
          scene.addLayer(pointLayer);
        });
    });

  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>