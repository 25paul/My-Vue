<!--  -->
<template>
  <div>
    <div>
      <h3>state</h3>
      <div>{{stateCount}}</div>
    </div>
    <div>
      <h3>commit mutation</h3>
      <div>
        <span>mutation: </span>
        <button @click="clickHandle">click</button>
      </div>
      <div>
        <span>携带参数的 mutation: </span>
        <button @click="clickNHandle(10)">clickN</button>
      </div>
      <div>
        <span>携带含有type属性的对象的 mutation: </span>
        <button @click="clickObjHandle()">clickObj</button>
      </div>
    </div>
    <div>
      <h3>getters</h3>
      <div>get长度： {{todolistsLength}}</div>
      <div v-for="(item, index) in todolists" :key="index">列表：{{item.id}}</div>
      <div>get第一个：{{firstTodo}}</div>
    </div>
    <div>
      <h3>dispatch action</h3>
      <div>
        <span>同步actions</span>
        <button @click="actionH">click</button>
      </div>
      <div>
        <span>异步actions</span>
        <button @click="actionAsync">clickAsync</button>
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
  components: {},
  computed: {
    // 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性 (opens new window)中返回某个状态
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