import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）;子组件能通过 this.$store 访问到

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        done: true
      },
      {
        id: 2,
        done: true
      },
      {
        id: 3,
        done: false
      }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
    incrementN (state, n) {
      state.count += n
    },
    // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象
    incrementObj (state, payload) {
      state.count += payload.amount
    }
  },
  // 有时候需要计算state的值，可以在每个组件进行computed，但是如果有多个组件需要用到的话，可以在store的getters里添加
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getter 也可以接受其他 getter 作为第二个参数
    doneTodosLength: (state, getters) => {
      return getters.doneTodos.length;
    },
    // 你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
    // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    getTodoById: state => id => {
      return state.todos.filter(todo => todo.id === id);
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    // 可以在 action 内部执行异步操作
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
    // Actions 支持同样的载荷方式和对象方式进行分发
  }
})

// 可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
// store.commit('increment')；   console.log(store.state.count) 

export default store;


/**
 * matution:
 * 
 * 再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。
 * 这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。
 * 此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。
 * 有了它，我们甚至可以实现如时间穿梭般的调试体验。
 * 
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
 * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 * 
 * 你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。
 * ”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
 * 
 * 
 * action: 
 * 
 * Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
 * 
 * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
 * 
 */