<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import { Scene, PointLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
// import { Mapbox } from '@antv/l7-maps';
export default {
  data() {
    return {};
  },
  mounted() {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        pitch: 0,
        style: 'blank',
        center: [ 34.00407302986006, 106.47111650000001 ],
        zoom: 14.89,
        minZoom: 10
      })
      // map: new Mapbox({
      //   style: 'blank',
      //   center: [ 121.435159, 31.256971 ],
      //   pitch: 4.00000000000001,
      //   zoom: 14.89,
      //   rotation: 19.313180925794313
      // })
    });
    fetch(
      'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json'
    )
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        const pointLayer = new PointLayer({})
          .source(data, {
            parser: {
              type: 'json',
              x: 'longitude',
              y: 'latitude'
            }
          })
          .shape('name', [
            'circle',
            'triangle',
            'square',
            'pentagon',
            'hexagon',
            'octogon',
            'hexagram',
            'rhombus',
            'vesica'
          ])
          .size('unit_price', [ 10, 25 ])
          .color('name', [ '#5B8FF9', '#5CCEA1', '#5D7092', '#F6BD16', '#E86452' ])
          .style({
            opacity: 0.3,
            strokeWidth: 2
          });

        scene.addLayer(pointLayer);
      });
    // 获得所有的图层，比如这里的PointLayer图层
    console.log(scene.getLayers());
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