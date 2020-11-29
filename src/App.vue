<template>
  <div id="app">
    <div v-if="false" class="template" v-load.arg.arg1="this.loadHandle">template</div>
    <scroll-loading v-if="false"></scroll-loading>
    <popup-drag></popup-drag>
  </div>
</template>

<script>
import ScrollLoading from './components/scrollLoading';
import PopupDrag from './components/popupDrag.vue';
export default {
  name: 'App',
  data () {
    return {
      arg: true,
      arg1: 100
    }
  },
  components: {
    ScrollLoading,
    PopupDrag
  },
  methods: {
    loadHandle () {
      console.log('aaa');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
