<template>
  <div class="hello" v-scroll-loading="getLoading">
    <div
      ref="item"
      class="item"
      v-for="(item, index) in onLists"
      :key="index"
    >{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'scrollLoading',
  data () {
    return {
      lists: [
        {name: '1'},
        {name: '2'},
        {name: '3'},
        {name: '4'},
        {name: '5'},
        {name: '6'},
        {name: '7'},
        {name: '8'},
        {name: '9'},
        {name: '0'},
        {name: '11'},
        {name: '12'},
        {name: '13'},
        {name: 'a1'},
        {name: 'a2'},
        {name: 'a3'},
        {name: 'a4'},
        {name: 'a5'},
        {name: 'a6'},
        {name: 'a7'},
        {name: 'a8'},
        {name: 'a9'},
        {name: 'a0'},
        {name: 'a11'},
        {name: 'a12'},
        {name: 'a13'},
        {name: 'a14'},
        {name: 'a15'},
        {name: 'a16'},
        {name: 'a17'}
      ],
      onLists: [],
      onIndex: 0
    }
  },
  mounted () {
    this.getLoading();
  },
  methods: {
    getLoading () {
      let begin = this.onIndex;
      let end = this.onIndex = this.onIndex + 10;
      if (end >= this.lists.length) {
        this.onLists.push(...this.lists.slice(begin, this.lists.length));
      } else {
        this.onLists.push(...this.lists.slice(begin, end));
      }
    }
  }
}
</script>

<style scoped>
.hello {
  width: 200px;
  height: 200px;
  overflow: auto;
  border: 1px solid #aaa;
  border-radius: 4px;
}
.item {
  height: 30px;
  width: 100%;
  line-height: 30px;
}
</style>
