<template>
  <div id="app">
    <div class="template" ref="temp" @scroll.stop.prevent="scrollHandle">
      <div class="appt">
        <div class="child"  @scroll.stop.prevent="scrollHandle3">
          <div class="temp"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    scrollHandle () {
      console.log(0)
    },
    scrollHandle1 () {
      console.log(1)
    },
    scrollHandle3 () {
      console.log(3)
      this.$refs.temp.style="overflow: hidden"
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 600px;
  .template {
    width: 300px;
    height: 100%;
    overflow: auto;
    color: #aaa;
    border: 1px solid red;
    &:before {
      content: "";
    }
    .appt {
      width: 200px;
      height: 2000px;
    }
    .child {
      width: 200px;
      height: 200px;
      overflow: auto;
      border: 1px solid #aaa;
      .temp {
        height: 1000px;
      }
    }
  }
}
</style>
