<template>
  <div id="app">
    <!-- <store-one></store-one> -->
    <!-- <store-two></store-two> -->
    <!-- <store-three></store-three> -->
    <store-four></store-four>
  </div>
</template>

<script>

// import StoreOne from './components/store_1';
// import StoreTwo from './components/store_2';
// import StoreThree from './components/store_3';
import StoreFour from './components/store_4';

export default {
  name: 'App',
  components: {
    // StoreOne,
    // StoreTwo,
    // StoreThree
    StoreFour
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
