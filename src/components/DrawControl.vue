<!--  -->
<template>
  <div id="draw-control"></div>
</template>

<script>
import { Scene } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
import { Mapbox } from '@antv/l7-maps';
import { DrawControl } from '@antv/l7-draw';
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {
    // 高德
    // const scene = new Scene({
    //   id: 'draw-control',
    //   map: new GaodeMap({
    //     pitch: 0,
    //     style: 'light',
    //     layers: [],
    //     center: [ 116.1608, 40.1119 ],
    //     zoom: 15
    //   })
    // });
    // scene.on('loaded', () => {
    //   // const layer1 = new AMap.TileLayer.Satellite();
    //   // scene.map.setLayers([]);
    //   // layer1.setMap(scene.map);
    //   const drawControl = new DrawControl(scene, {
    //     position: 'topright',
    //     layout: 'horizontal', // horizontal vertical
    //     controls: {
    //       point: true,
    //       polygon: true,
    //       line: true,
    //       circle: true,
    //       rect: true,
    //       delete: true
    //     }
    //   });
    //   scene.addControl(drawControl);

    // });

    // mapbox
    const scene = new Scene({
      id: 'draw-control',
      map: new Mapbox({
        pitch: 0,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [ 115.5268, 34.3628 ],
        zoom: 15
      })
    });
    scene.on('loaded', () => {
      const drawControl = new DrawControl(scene, {
        position: 'topright',
        layout: 'horizontal', // horizontal vertical
        controls: {
          point: true,
          polygon: true,
          line: true,
          circle: true,
          rect: true,
          delete: true
        }
      });
      scene.addControl(drawControl);

    });
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>