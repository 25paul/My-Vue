<!--  -->
<template>
  <div class="todo-index">
    <div class="index-top">
      <div class="index-content">
        <h2>任务列表</h2>
      </div>
    </div>
    <div class="index-main">
      <h3 class="big-title">添加任务：</h3>
      <input
        placeholder="例如：打球；    提示：+回车即可添加任务"
        class="task-input"
        type="text"
        v-on:keyup.enter="inputEnterHandle"
        v-model="todo"
      />
      <!-- <ul class="task-type">
        <li>个任务未完成</li>
        <li class="action">
          <a :class="{active:visibility!=='unCompleted'&&visibility!=='completed'}" href="#all">所有任务</a>
          <a :class="{active:visibility==='unCompleted'}" href="#unCompleted">未完成的任务</a>
          <a :class="{active:visibility==='completed'}" href="#completed">完成的任务</a>
        </li>
      </ul> -->
      <h3 class="big-title">任务列表：</h3>
      <div class="tasks">
        <span class="no-task-tip" v-show="!lists.length">还没有添加任何任务</span>
        <div class="task-header">
          <div class="task-item">
            <div class="item-id">id</div>
            <div class="item-name">任务名称</div>
            <div class="item-content">任务内容</div>
            <div class="item-deadline">截止时间</div>
            <div class="item-status">状态</div>
            <div class="item-operate">操作</div>
          </div>
        </div>
        <ul class="task-lists" v-show="lists.length">
          <li class="task-item" v-for="(item, index) in getLists" :key="index">
            <div class="item-id">{{item.id}}</div>
            <div class="item-name">{{item.name}}</div>
            <div class="item-content">{{item.content}}</div>
            <div class="item-deadline">{{item.deadline}}</div>
            <div class="item-status">{{statusVal(item.status)}}</div>
            <div class="item-operate">
              <div class=""></div>
              <div class=""></div>
              <div class=""></div>
            </div>
          </li>
        </ul>
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
      }
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
  .index-top{
    width: 100%;
    height: 40px;
    background-color: #99b4e5;
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
    margin: 0 auto;
    box-sizing: border-box
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