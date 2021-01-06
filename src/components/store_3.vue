<!-- module -->
<template>
  <div>
    <div>
      <h3>state</h3>
      <div>a: {{getaCount}}</div>
      <div>b: {{getbCount}}</div>
    </div>
    <div>
      <h3>getter</h3>
      <div>{{doubleCount}}</div>
    </div>
    <div>
      <h3>mutation</h3>
      <button @click="moduleHandle">click</button>
    </div>
    <div>
      <h3>dispatch</h3>
      <button @click="moduleHandle1">clickaction</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {
  },
  computed: {
    getaCount () {
      return this.$store.state.a.aCount;
    },
    getbCount () {
      return this.$store.state.b.bCount;
    },
    doubleCount () {
      return this.$store.getters.doubleCount;
    }
  },
  watch: {},
  mounted () {},
  methods: {
    moduleHandle () {
      this.$store.commit('a/increment');
    },
    moduleHandle1 () {
      this.$store.dispatch('incrementIfOddOnRootSum');
    }
  }
}
</script>
<style lang='scss' scoped>
</style>