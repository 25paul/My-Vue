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
          style="width: 100%"
          empty-text="暂无数据">
          <el-table-column
            v-for="(item, index) in headerData"
            :key="index"
            :prop="item.key"
            :label="item.label"
            align="center"
            :min-width="item.width">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="150"
            align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="editHandle(scope.row)">编辑</el-button>
              <el-button type="text" size="small" @click="finishHandle(scope.row)">完成</el-button>
              <el-button type="text" size="small" @click="deleteHandle(scope.row)">删除</el-button>
            </template>
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
    <edit-popup :editVisible="editVisible" @editClose="editClose" :formData="editFormData"></edit-popup>
  </div>
</template>

<script>
import AddPopup from './todolist/addPopup.vue';
import StatusSelect from './todolist/statusSelect.vue';
import { get } from '../interface/server';
import EditPopup from './todolist/editPopup.vue';
export default {
  data () {
    return {
      todo: '',
      visibility: 'unCompleted',
      headerData: [
        {
          label: 'id',
          key: 'id',
          width: 100
        },
        {
          label: '任务',
          key: 'name',
          width: 150
        },
        {
          label: '内容',
          key: 'content',
          width: 200
        },
        {
          label: '截止时间',
          key: 'deadline',
          width: 200
        },
        {
          label: '状态',
          key: 'status',
          width: 100
        }
      ],
      tableData: [
        {id: 1, name: '打蓝球', deadline: '20201225', content: '在下午打比赛', status: 1},
        {id: 1, name: '打蓝球', deadline: '20201225', content: '在下午打比赛', status: 1},
        {id: 1, name: '打蓝球', deadline: '20201225', content: '在下午打比赛', status: 1},
      ],
      statusObj: {
        1: '未完成',
        2: '已完成'
      },
      totalCount: 0,
      curPage: 1,
      curStatus: -1,
      editVisible: false,
      editFormData: {}
    };
  },
  components: {
    AddPopup,
    StatusSelect,
    EditPopup
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
    },
    deleteHandle () {
      this.$confirm('此操作将删除该任务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    editHandle (val) {
      this.editVisible = true;
      this.editFormData = val;
      console.log(val);
    },
    editClose () {
      this.editVisible = false;
    },
    finishHandle (val) {
      console.log(val);
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