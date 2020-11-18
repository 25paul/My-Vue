<template>
  <div id="app">
    <div class="template">template</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
#app {
  .template {
    color: #aaa;
    &:before {
      content: "";
    }
  }
}
</style>
