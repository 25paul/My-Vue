<!--  -->
<template>
  <div @click="handle">{{count}}</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {
    count () {
      return this.$store.state.count;
    }
  },
  watch: {},
  mounted () {},
  methods: {
    handle () {
      this.$store.dispatch('increment');
    }
  }
}
</script>
<style lang='scss' scoped>
</style>