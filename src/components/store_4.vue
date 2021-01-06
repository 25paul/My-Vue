<!--  -->
<template>
  <div>
    <div>
      <h3>Getters</h3>
      <div>{{stateA}}</div>
    </div>
    <div>
      <h3>mutations</h3>
      <button @click="clickHandle">click</button>
      <button @click="clickHandleN">clickN</button>
    </div>
    <div>
      <h3>actions</h3>
      <button @click="clickHandleA">clickA</button>
      <button @click="clickHandleAN">clickAN</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {
    ...mapGetters(['stateA'])
  },
  watch: {},
  mounted () {
    setTimeout(() => {
      this.$store.commit('a/setStateA');
      this.$store.dispatch('a/actionStateA');
    }, 1000)
  },
  methods: {
    // ...mapMutations(['a/setStateA', 'a/setStateAByN']),
    // clickHandle () {
    //   this['a/setStateA']();
    // },
    // clickHandleN () {
    //   this['a/setStateAByN'](10);
    // }
    ...mapMutations('a', ['setStateA', 'setStateAByN']),
    clickHandle () {
      this.setStateA();
    },
    clickHandleN () {
      this.setStateAByN(10);
    },

    ...mapActions('a', ['actionStateA', 'actionStateAByN']),
    clickHandleA () {
      this.actionStateA();
    },
    clickHandleAN () {
      this.actionStateAByN();
    },
  }
}
</script>
<style lang='scss' scoped>
</style>