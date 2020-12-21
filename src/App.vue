<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './pages/index';
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss" scoped>
#app {
  max-width: 1260px;
  width: 78%;
  margin: 0 auto;
  background-color: #eee;
  .template {
    color: #aaa;
    &:before {
      content: "";
    }
  }
}
</style>
