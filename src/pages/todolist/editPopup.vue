<template>
  <div class="edit-popup">
    <el-dialog
      title="编辑任务"
      :visible.sync="editVisible"
      :before-close="cancelHandle">
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
        <el-button @click="cancelHandle">取 消</el-button>
        <el-button type="primary" @click="certainHandle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { post } from '../../interface/server';
// import axios from 'axios';
export default {
  data () {
    return {
      form: {},
      formLabelWidth: '200',
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
    editVisible: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    editVisible (val) {
      if (val) this.form = this.formData;
    }
  },
  mounted () {
  },
  methods: {
    certainHandle () {
      this.$emit('editClose');
      this.createHandle();
      // axios({
      //   method: 'post',
      //   url: '/create',
      //   data: {
      //     "name": this.form.name,
      //     "deadline": this.form.deadline,
      //     "content": this.form.content
      //   }
      // });
    },
    cancelHandle () {
      console.log('close')
      this.$emit('editClose');
    },
    dialogClose () {

    },
    async createHandle () {
      let params = {
        "name": this.form.name,
        "deadline": this.form.deadline,
        "content": this.form.content
      };
      await post('create', params);
    }
  }
}
</script>

<style lang='scss'>
.edit-popup {
  .el-date-editor.el-input {
    width: 100%;
  }
}
</style>