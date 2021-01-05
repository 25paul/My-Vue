<!--  -->
<template>
  <div>
    <div>
      <h3>state</h3>
      <div>{{stateCount}}</div>
    </div>
    <div>
      <h3>commit mutation</h3>
      <button @click="clickHandle">click</button>
      <button @click="clickNHandle(10)">clickN</button>
      <button @click="clickObjHandle()">clickObj</button>
    </div>
    <div>
      <h3>getters</h3>
      <div>长度为： {{todolistsLength}}</div>
      <div v-for="(item, index) in todolists" :key="index">列表：{{item.id}}</div>
      <div>第一个：{{firstTodo}}</div>
    </div>
    <div>
      <h3>dispatch action</h3>
      <button @click="actionH">click</button>
      <button @click="actionAsync">clickAsync</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {
    stateCount () {
      return this.$store.state.count;
    },
    todolists () {
      return this.$store.getters.doneTodos;
    },
    todolistsLength () {
      return this.$store.getters.doneTodosLength;
    },
    firstTodo () {
      return this.$store.getters.getTodoById(1);
    }
  },
  watch: {},
  mounted () {},
  methods: {
    clickHandle () {
      this.$store.commit('increment');
    },
    clickNHandle (n) {
      this.$store.commit('incrementN', n);
    },
    clickObjHandle () {
      this.$store.commit({
        type: 'incrementObj',
        amount: 20
      });
    },
    actionH () {
      this.$store.dispatch('increment')
    },
    actionAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>