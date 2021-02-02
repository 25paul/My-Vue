<!-- 点标注图 -->
<template>
  <div id="point-maker"></div>
</template>

<script>
import { Scene, PointLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
export default {
  data () {
    return {
      scene: '',
      pointLayer: ''
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {
    this.scene = new Scene({
      id: 'point-maker',
      map: new GaodeMap({
        center: [121.39382669582967, 31.258134],
        pitch: 0,
        style: 'light',
        zoom: 13,
      })
    });
    this.scene.on('loaded', () => {
      this.fetchData();
    })
    // const scene = new Scene({
    //   id: 'point-maker',
    //   map: new GaodeMap({
    //     pitch: 0,
    //     style: 'light',
    //     center: [ 121.434765, 31.256735 ],
    //     zoom: 14.83
    //   })
    // });
    // scene.on('loaded', () => {
    //   fetch(
    //     'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json'
    //   )
    //     .then(res => res.json())
    //     .then(data => {
    //       scene.addImage(
    //         '00',
    //         'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg'
    //       );
    //       scene.addImage(
    //         '01',
    //         'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg'
    //       );
    //       scene.addImage(
    //         '02',
    //         'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg'
    //       );
    //       const imageLayer = new PointLayer()
    //         .source(data, {
    //           parser: {
    //             type: 'json',
    //             x: 'longitude',
    //             y: 'latitude'
    //           }
    //         })
    //         .shape('name', [ '00', '01', '02' ])
    //         .size(20);
    //       scene.addLayer(imageLayer);
    //     });
    // });

  },
  methods: {
    async fetchData () {
      const response = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json',
      );
      const data = await response.json();
      this.scene.addImage(
        '00',
        'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg',
      );
      this.scene.addImage(
        '01',
        'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg',
      );
      this.scene.addImage(
        '02',
        'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg',
      );
      this.pointLayer = new PointLayer({
        name: 'pointLayer_1'
      })
      .source(data, {
        parser: {
          type: 'json',
          x: 'longitude',
          y: 'latitude',
        },
      })
      .shape('name', [ '00', '01', '02' ])
      .size(20)
      console.log(this.scene);
      console.log(this.pointLayer);
      this.scene.addLayer(this.pointLayer);
    },
  }
}
</script>
<style lang='scss' scoped>
</style>