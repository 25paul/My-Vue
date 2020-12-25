<!--  -->
<template>
  <div class="todo-index">
    <div class="index-top">
      <div class="index-content">
        <h2>任务列表</h2>
      </div>
    </div>
    <div class="index-main">
      <div class="main-operate">
        <add-popup></add-popup>
        <status-select></status-select>
      </div>
      <div class="main-table">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            fixed
            prop="id"
            label="id"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务"
            min-width="150">
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容"
            min-width="200">
          </el-table-column>
          <el-table-column
            prop="deadline"
            label="截止时间"
            min-width="250">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            min-width="100">
          </el-table-column>
        </el-table>
      </div>
      <div class="main-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalCount"
          :hide-on-single-page="true"
          @current-change="pageChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import AddPopup from './todolist/addPopup.vue';
import StatusSelect from './todolist/statusSelect.vue';
import { get } from '../interface/server';
export default {
  data () {
    return {
      todo: '',
      visibility: 'unCompleted',
      tableData: [
        {id: 1, name: '打蓝球', deadline: '20201225', content: '在下午打比赛', status: 1},
        {id: 2, name: '打足球', deadline: '20201224', content: '在下午打比赛', status: 1},
        {id: 3, name: '打排球', deadline: '20201223', content: '在下午打比赛', status: 1},
        {id: 4, name: '打高尔夫球', deadline: '20201222', content: '在下午打比赛', status: 1},
        {id: 5, name: '打棒球', deadline: '20201221', content: '在下午打比赛在下午打比赛在下午打比赛在下午打比赛在下午打比赛在下午打比赛在下午打比赛', status: 1},
        {id: 6, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1},
        {id: 7, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1},
        {id: 8, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1},
        {id: 9, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1},
        {id: 10, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1},
        {id: 11, name: '打个球', deadline: '20201220  ', content: '在下午打比赛', status: 1},
      ],
      statusObj: {
        1: '未完成',
        2: '已完成'
      },
      totalCount: 0,
      curPage: 1,
      curStatus: -1,
      // curPage: 1
    };
  },
  components: {
    AddPopup,
    StatusSelect
  },
  computed: {
    getLists () {
      return this.lists.filter((item) => {
        return item.status === 1;
      })
    },
    paginationTotal () {
      return Math.ceil(this.tableData.length / 10);
    }
  },
  watch: {},
  mounted () {
    this.getTodoList(this.curStatus, this.curPage);
  },
  methods: {
    inputEnterHandle () {

    },
    todoHandle () {

    },
    statusVal (val) {
      return this.statusObj[val];
    },
    async getTodoList (status, page) {
      let params = {
        status,
        page
      };
      let res = await get('list', params);
      if (res.data) {
        console.log(res);
        this.totalCount = res.data.list.count;
        this.tableData = res.data.list.rows;
      }
    },
    pageChange (val) {
      console.log(val);
      this.getTodoList(this.curStatus, val);
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
    .main-operate {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .main-table {
      margin-bottom: 10px;
    }
    .main-pagination {
      text-align: right;
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