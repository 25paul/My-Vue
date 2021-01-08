<template>
  <div id="app">
    <!-- 对应src/store_1/index.js -->
    <!-- <store-one></store-one> -->

    <!-- 对应src/store_1/index.js -->
    <!-- <store-two></store-two> -->

    <!-- 对应src/store_3/index.js -->
    <!-- <store-three></store-three> -->

    <!-- 对应src/store_4/index.js -->
    <!-- <store-four></store-four> -->

    <!-- 对应src/store_5/index.js -->
    <store-five></store-five>
  </div>
</template>

<script>

// import StoreOne from './components/store_1';
// import StoreTwo from './components/store_2';
// import StoreThree from './components/store_3';
// import StoreFour from './components/store_4';
import StoreFive from './components/store_5';

export default {
  name: 'App',
  components: {
    // StoreOne,
    // StoreTwo,
    // StoreThree
    // StoreFour
    StoreFive
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
