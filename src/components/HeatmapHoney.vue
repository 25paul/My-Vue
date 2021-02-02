<!-- 蜂窝图 3D -->
<template>
  <div id="honey"></div>
</template>

<script>
import { Scene, HeatmapLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
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
      id: 'honey',
      map: new Mapbox({
        pitch: 43,
        center: [ 120.13383079335335, 29.651873105004427 ],
        zoom: 7.068989519212174,
        style: {
          version: 8,
          sprite: 'https://lzxue.github.io/font-glyphs/sprite/sprite',
          glyphs:
            'https://gw.alipayobjects.com/os/antvdemo/assets/mapbox/glyphs/{fontstack}/{range}.pbf',
          sources: {},
          layers: [
            {
              id: 'background',
              type: 'background',
              paint: {
                'background-color': '#2b2b3a'
              }
            }
          ]
        },
      })
    });
    scene.on('loaded', () => {
      fetch(
        'https://gw.alipayobjects.com/os/basement_prod/a1a8158d-6fe3-424b-8e50-694ccf61c4d7.csv'
      )
        .then(res => res.text())
        .then(data => {
          const layer = new HeatmapLayer({})
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng',
                y: 'lat'
              },
              transforms: [
                {
                  type: 'hexagon',
                  size: 2500,
                  field: 'v',
                  method: 'sum'
                }
              ]
            })
            .size('sum', sum => {
              return sum * 200;
            })
            .shape('hexagonColumn')
            .style({
              coverage: 0.8,
              angle: 0,
              opacity: 1.0
            })
            .color('sum', [
              '#094D4A',
              '#146968',
              '#1D7F7E',
              '#289899',
              '#34B6B7',
              '#4AC5AF',
              '#5FD3A6',
              '#7BE39E',
              '#A1EDB8',
              '#C3F9CC',
              '#DEFAC0',
              '#ECFFB1'
            ]);
          scene.addLayer(layer);
          console.log(layer);
        });
    });
    console.log(scene);
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>