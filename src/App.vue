<template>
  <div id="app">
    <d-one></d-one>
    <d-two></d-two>
    <d-there></d-there>
  </div>
</template>

<script>
import dOne from './components/dOne.vue';
import dTwo from './components/dtwo.vue';
import dThere from './components/dThere.vue';
export default {
  components: {
    dOne,
    dTwo,
    dThere
  },
  name: 'App'
}
</script>

