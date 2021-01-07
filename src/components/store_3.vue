<!-- module -->
<template>
  <div>
    <div>
      <h3>state</h3>
      <div>跟: {{getCount}}</div>
      <div>模块a: {{getaCount}}</div>
      <div>模块b: {{getbCount}}</div>
    </div>
    <div>
      <h3>getter</h3>
      <div>模块a的两倍：{{doubleCount}}</div>
      <div>getter的四个参数state, getters, rootState, rootGetters：{{doubleandloca}}</div>
    </div>
    <div>
      <h3>mutation</h3>
      <div>
        <span>commit</span>
        <button @click="moduleHandle">click</button>
      </div>
      <div>
        <span>get root mutations</span>
        <button @click="mutationRootAndLocal">click</button>
      </div>
    </div>
    <div>
      <h3>dispatch</h3>
      <div>
        <span>actions</span>
        <button @click="moduleHandle1">clickaction</button>
      </div>
      <div>
        <span>get root actions</span>
        <button @click="actionRootAndLocal">clickrootaction</button>
      </div>
      <div>
        <span>root actions in module</span>
        <button @click="rootActionHandle">clickrootaction</button>
      </div>
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
    getCount () {
      return this.$store.state.count;
    },
    getaCount () {
      return this.$store.state.a.aCount;
    },
    getbCount () {
      return this.$store.state.b.bCount;
    },
    doubleCount () {
      return this.$store.getters['a/doubleCount'];
    },
    doubleandloca () {
      return this.$store.getters['a/doubleandloca'];
    }
  },
  watch: {},
  mounted () {},
  methods: {
    moduleHandle () {
      this.$store.commit('a/increment');
    },
    moduleHandle1 () {
      this.$store.dispatch('a/incrementIfOddOnRootSum');
    },
    mutationRootAndLocal () {
      this.$store.commit('a/getRootIncrement');
    },
    actionRootAndLocal () {
      this.$store.dispatch('a/getRootIncrement');
    },
    rootActionHandle () {
      this.$store.dispatch('rootAction', {name: 'datacube'});
    }
  }
}
</script>
<style lang='scss' scoped>
</style>