<!--  -->
<template>
  <div class="todo-index">
    <div class="index-top">
      <div class="index-content">
        <h2>任务列表</h2>
      </div>
    </div>
    <div class="index-main">
      <div class="add-btn">
        <el-button>新增</el-button>
      </div>
      <div class="main-table">

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: '',
      visibility: 'unCompleted',
      lists: [
        {id: 1, name: '打蓝球', deadline: '20201225', content: '在下午打比赛', status: 1},
        {id: 2, name: '打足球', deadline: '20201224', content: '在下午打比赛', status: 1},
        {id: 3, name: '打排球', deadline: '20201223', content: '在下午打比赛', status: 1},
        {id: 4, name: '打高尔夫球', deadline: '20201222', content: '在下午打比赛', status: 1},
        {id: 5, name: '打棒球', deadline: '20201221', content: '在下午打比赛', status: 1},
        {id: 6, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1}
      ],
      statusObj: {
        1: '未完成',
        2: '已完成'
      },
    };
  },
  components: {},
  computed: {
    getLists () {
      return this.lists.filter((item) => {
        return item.status === 1;
      })
    }
  },
  watch: {},
  mounted () {},
  methods: {
    inputEnterHandle () {

    },
    todoHandle () {

    },
    statusVal (val) {
      return this.statusObj[val];
    }
  }
}
</script>
<style lang='scss' scoped>
.todo-index {
  width: 80%;
  max-width: 960px;
  min-width: 480px;
  margin: 0 auto;
  .index-top{
    width: 100%;
    height: 40px;
    background-color: #99b4e5;
    margin-bottom: 10px;
    .index-content{
      width: 100%;
      text-align: center;
    }
    h2 {
      line-height: 40px;
      font-size: 18px;
      color: #fff
    }
  }
  .index-main{
    width: 100%;
    box-sizing: border-box;
    .add-btn {
      width: 100%;
      border-radius: 4px;
    }
  }
  .task-input{
    width: 100%;
    height: 40px;
    outline: 0;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ccc
  }
  .task-type {
    display: flex;
    margin: 10px 0;
    li {
      padding-left: 10px;
      flex: 1;
      color: #99b4e5;
      &:nth-child(1) {
        padding: 5px 0 0 10px
      }
      .action{
        text-align:center;
        display:flex
      }
    }
  }
  .tasks {
    .todo-lists{
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        height: 40px;
        line-height: 40px;
        padding: 0 8px;
        position: relative;
        font-size: 16px;
        border-bottom: 1px solid #ededed;
        cursor: pointer;
        &:hover{
          background-color: #fafafa
        }
        .toggle {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>