<template>
  <div id="app"></div>
</template>

<script>
var mymap = L.map('app').setView([51.505, -0.09], 13);
L.tileLayer.provider('CartoDB.PositronNoLabels').addTo(mymap);
export default {
  name: 'App',
  components: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#app { height: 180px; }
</style>
