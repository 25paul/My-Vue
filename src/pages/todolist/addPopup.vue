<template>
  <div class="add-popup">
    <el-button type="text" @click="dialogFormVisible = true">新增</el-button>
    <el-dialog
      title="新增任务"
      :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="任务名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="截止时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.deadline"
              type="date"
              :editable="false"
              placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="任务内容" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="form.content">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="certainHandle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      formLabelWidth: '200',
      dialogFormVisible: false,
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now();
        },
        shortcuts: [{
          text: '明天',
          onClick(picker) {
            picker.$emit('pick', new Date() + 3600 * 1000 * 24);
          }
        }, {
          text: '一周后',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }, {
          text: '30天后',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
            picker.$emit('pick', date);
          }
        }]
      }
    }
  },
  props: {
  },
  methods: {
    certainHandle () {
      this.dialogFormVisible = false;
      console.log(this.form);
    }
  }
}
</script>

<style lang='scss'>
.add-popup {
  .el-date-editor.el-input {
    width: 100%;
  }
}
</style>