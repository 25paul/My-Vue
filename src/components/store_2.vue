<!-- map 辅助函数 -->
<template>
  <div>
    <div>
      <h3>state</h3>
      <div>{{count}}</div>
    </div>
    <div>
      <h3>getters</h3>
      <div>已完成的列表个数：{{doneCount}}</div>
    </div>
    <div>
      <h3>mutation</h3>
      <button @click="clickHandle">click</button>
      <button @click="clickNHandle(10)">clickN</button>
    </div>
    <div>
      <h3>action</h3>
      <button @click="actionH">click</button>
      <button @click="actionAsync">clickAsync</button>
    </div>
  </div>
</template>

<script>
/**
 * mapState: 
 * 
 * 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
 * 为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
 * mapState 函数返回的是一个对象。
 * 
 * mapState 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？
 * 通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性。但是自从有了对象展开运算符 (opens new window)，我们可以极大地简化写法
 * 
 * 
 * mapGetters: 
 * 
 * 
 * mapMutations:
 * 
 * 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
 * 
 * 
 * mapActions: 
 * 
 * 你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
 * 
 */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      localCount: 10
    };
  },
  components: {},
  /*
  computed: mapState({
    // 箭头函数可使代码更简练
    // count: state => state.count

    // 传字符串参数 'count' 等同于 `state => state.count`
    // countAlias: 'count'

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  */
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   'count'
  // ]),
  computed: {
    ...mapState({
      count: state => state.count
    }),

    // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    ...mapGetters([
      'doneTodosLength'
    ]),
    // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
    ...mapGetters({
      doneCount: 'doneTodosLength'
    })
  },
  watch: {},
  mounted () {
    console.log(mapState);
  },
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementN' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    clickHandle () {
      this.increment();
    },
    clickNHandle (n) {
      this.incrementN(n);
    },

    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementAsync' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    actionH () {
      this.increment();
    },
    actionAsync () {
      this.incrementAsync();
    }
  }
}
</script>
<style lang='scss' scoped>
</style>