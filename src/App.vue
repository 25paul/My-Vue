<template>
  <div id="app">
    <vue-drag-resize :isActive="true" :w="50" :h="100">
      <div>
        <h3>Hello World!</h3>
        <p>{{ top }} х {{ left }} </p>
        <p>{{ width }} х {{ height }}</p>
      </div>
    </vue-drag-resize>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  },
  components: {
  },
  methods: {
    resize(newRect) {
        this.width = newRect.width;
        this.height = newRect.height;
        this.top = newRect.top;
        this.left = newRect.left;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
