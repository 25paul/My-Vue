<!--  -->
<template>
  <div id="label"></div>
</template>

<script>
import { Scene, MarkerLayer, Marker, PointLayer, Popup } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
export default {
  data () {
    return {
      data: [
        {'sum(销售金额)': 151682777.09000546, 省份: "河南省", latitude: 34.757975, longitude: 113.665412},
        {'sum(销售金额)': 101229200.95999943, 省份: "浙江省", latitude: 30.287459, longitude: 120.153576},
        {'sum(销售金额)': 11932274.78999999, 省份: "吉林省", latitude: 43.886841, longitude: 125.3245},
        {'sum(销售金额)': 68320015.72999907, 省份: "四川省", latitude: 30.659462, longitude: 104.065735},
        {'sum(销售金额)': 3731732.48999999, 省份: "天津市", latitude: 39.125596, longitude: 117.190182},
        {'sum(销售金额)': 9656606.460000008, 省份: "宁夏", latitude: 38.46637, longitude: 106.278179},
        {'sum(销售金额)': 54926494.39999879, 省份: "安徽省", latitude: 31.86119, longitude: 117.283042},
        {'sum(销售金额)': 116092377.04000114, 省份: "山东省", latitude: 36.675807, longitude: 117.000923},
        {'sum(销售金额)': 14982340.380000211, 省份: "山西省", latitude: 37.857014, longitude: 112.549248},
        {'sum(销售金额)': 34657181.70000026, 省份: "广东省", latitude: 23.125178, longitude: 113.280637},
        {'sum(销售金额)': 5409940.109999983, 省份: "广西省", latitude: 22.82402, longitude: 108.320004},
        {'sum(销售金额)': 93506928.76000081, 省份: "新疆", latitude: 43.792818, longitude: 87.617733},
        {'sum(销售金额)': 73817839.26999827, 省份: "河北省", latitude: 38.045474, longitude: 114.502461},
        {'sum(销售金额)': 47782957.6399988, 省份: "江西省", latitude: 28.676493, longitude: 115.892151}
      ],
      scene: '',
      markerLayer: '',
      labeled_features: [ '省份', 'sum(销售金额)' ]
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {
    this.scene = new Scene({
      id: 'label',
      map: new GaodeMap({
        pitch: 0,
        style: 'light',
        // center: [ 106.47111650000001, 34.00407302986006 ],
        // center: [ 34.00407302986006, 106.47111650000001 ],
        // center: [ 121.435159, 31.256971 ],
        zoom: 3,
        minZoom: 3
      })
    });
    console.log(this.scene);
    this.scene.on('loaded', (ev) => {
      console.log('loaded', ev, this.scene);
      this.fitBoundsMap();
      this.addMapSymbols();
      setTimeout(() => {
        this.addMapLabels();
      }, 100);
      this.scene.on('zoomend', () => {
        console.log('zoomed', this.markerLayer && this.markerLayer.markers);
        this.markerLayer.markers.forEach(item => {
          item.remove();
        })
        this.markerLayer && this.scene.removeMarkerLayer(this.markerLayer);
        this.addMapLabels();
      }); // 缩放停止时触发
    });
  },
  methods: {
    fitBoundsMap () {
      let latlngs = this.data.map(v => [v.latitude, v.longitude]).filter(v => this.isDefined(v[0]) && this.isDefined(v[1]));
      // if(notEmpty(latlngs)) {
      let latitudeArr = latlngs.map(item => {
        return item[0];
      });
      let longitudeArr = latlngs.map(item => {
        return item[1];
      })
      this.scene.fitBounds([
        [Math.min(...longitudeArr), Math.min(...latitudeArr)],
        [Math.max(...longitudeArr), Math.max(...latitudeArr)],
      ]);
      // }
    },
    addMapSymbols () {
      // let tooltip=config.tooltip_name||[]
      const pointLayer = new PointLayer({
        name: 'symbol'
      })
      .source(this.data, {
        parser: {
          type: 'json',   // 需要指定数据格式，不然默认的是geojson格式
          x: 'longitude',
          y: 'latitude'
        }
      })
      .shape('circle')
      .size('sum(销售金额)', [ 1, 25 ])
      .color('red')
      .style({
        opacity: 0.3,
        strokeWidth: 1
      });
      this.scene.addLayer(pointLayer);
      pointLayer.on('click', (ev) => {
        pointLayer.setSelect(ev.featureId);
        pointLayer.color('rgba(222, 31, 78, 0.5)');
        pointLayer.style({
          'color': 'blue'
        });
      });
      pointLayer.on('unclick', (ev) => {
        console.log(ev);
        pointLayer.setSelect(1000000);
        pointLayer.color('red');
      });
      let popupLayer = new Popup({
        closeButton: false
      })
      pointLayer.on('mousemove', (ev) => {
        console.log(ev);
        // if (!config.tooltip_show) return;
        // if (tooltip.length===0) return;
        let tooltipData = ev.feature;
        delete tooltipData._id;
        delete tooltipData.coordinates;
        // var html = $$.formatTooltipText(ev.feature);
        var html = `<div style="display: flex; flex-direction: column; font-size: 12px; align-items: center;"><span>${ev.feature['省份']}</span><span>${ev.feature['sum(销售金额)']}</span></div>`
        popupLayer.setLnglat([ev.lngLat.lng, ev.lngLat.lat])
        .setHTML(html);
        this.scene.addPopup(popupLayer);
      });
      pointLayer.on('mouseout', (ev) => {
        console.log(ev);
        popupLayer.remove();
      });
    },
    addMapLabels () {
      // if(isEmpty(labeled_features)) return
      // const labelLayer = new L7.PointLayer({
      //   name: 'label'
      // })
      // .source(data, {
      //   parser: {
      //     type: 'json',   // 需要指定数据格式，不然默认的是geojson格式
      //     x: 'longitude',
      //     y: 'latitude'
      //   }
      // })
      // .shape(['sum(销售金额)', '省份'], 'text')
      // .size(12)
      // .style({
      //   textAnchor: 'bottom', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
      //   textOffset: [ 0, 0 ], // 文本相对锚点的偏移量 [水平, 垂直]
      //   spacing: 2, // 字符间距
      //   padding: [ 1, 1 ], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
      // })
      // .color('#000');
      // scene.addLayer(labelLayer);
      this.markerLayer = new MarkerLayer();
      let getMapService = this.scene.getMapService();
      let longPixelsPerDegree = getMapService.coordinateSystemService.pixelsPerDegree && Math.abs(getMapService.coordinateSystemService.pixelsPerDegree[0]);
      let latPixelsPerDegree = getMapService.coordinateSystemService.pixelsPerDegree && Math.abs(getMapService.coordinateSystemService.pixelsPerDegree[1]);
      let symbolLayer = this.scene.getLayerByName('symbol');
      let symbolCircle = symbolLayer.encodedData;
      // 优化一下文本标签的显示，在文本标签太多导致重叠等等情况下
      // 计算两个地方的半径和文本标签的长度之和，在这个范围内有其他标签的话都不显示
      let noLabel = [];
      for (let i = 0; i < this.data.length; i++) {
        let v = this.data[i];
        let circle = symbolCircle[i];
        // let nextCircle = symbolCircle[i + 1];
        let max_txt = 0;
        this.labeled_features.forEach((l, j) => {
          console.log(j);
          let txt = v[l] + '';
          max_txt = txt.length > max_txt ? txt.length : max_txt
        })
        let max_txt_length = max_txt * 8;
        if (noLabel.indexOf(i) < 0) {
          for (let j = i + 1; j < this.data.length; j++) {
            let nextCircle = symbolCircle[j];
            let longLength = longPixelsPerDegree * Math.abs(circle.coordinates[0] - nextCircle.coordinates[0]);
            let latLength = latPixelsPerDegree * Math.abs(circle.coordinates[1] - nextCircle.coordinates[1]);
            let circleLength = Math.sqrt(Math.pow(longLength, 2) + Math.pow(latLength, 2));
            if ((max_txt_length / 2 + circle.size / 2 + nextCircle.size / 2) > circleLength) {
              if (noLabel.indexOf(j) < 0) {
                noLabel.push(j);
              }
            }
          }
        }
      }
      
      for (let i = 0; i < this.data.length; i++) {
        if (noLabel.indexOf(i) < 0) {
          const divDom = document.createElement('div');
          divDom.className = 'map-label-text';
          divDom.style = "display: flex; flex-direction: column; font-size: 12px; align-items: center;"
          this.labeled_features.forEach((lf, lid) => {
            console.log(lid);
            const pDom = document.createElement('span');
            // pDom.textContent = format_list[lid].formatLabel(data[i][lf]);
            pDom.textContent = this.data[i][lf];
            divDom.appendChild(pDom);
          })
          const el = document.createElement('label');
          el.className = 'labelclass';
          el.innerHTML = divDom.outerHTML;
          const marker = new Marker({
            element: el
          }).setLnglat({ lng: this.data[i].longitude, lat: this.data[i].latitude - 1});
          this.markerLayer.addMarker(marker);
        }
      }
      this.scene.addMarkerLayer(this.markerLayer);
    },
    isDefined (v) {
      return typeof v !== "undefined";
    }
  }
};
</script>
<style lang='scss' scoped>
#label {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 400px;
}
</style>
