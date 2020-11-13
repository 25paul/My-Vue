<template>
  <div class="check-box">
    <div>添加样式的 element UI checkbox</div>
    <div class="select-all">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    </div>
    <div style="margin: 15px 0;"></div>
    <div class="select-box">
      <el-checkbox-group v-model="checkedCondition" @change="handleCheckedCitiesChange">
        <div class="checkbox-item" v-for="(con, index) in conditions" :key="index">
            <el-checkbox :label="con">{{con}}</el-checkbox>
        </div>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  import { arrayValue } from '../data/index.js';
  export default {
    name: 'checkbox',
    data () {
      return {
        isIndeterminate: false,
        checkAll: false,
        allConditions: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],
        conditions: [],
        checkedCondition: []
      }
    },
    methods: {
      handleCheckAllChange (val) {
        this.checkedCondition = val ? this.allConditions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange (val) {
        let checkedCount = val.length;
        this.checkAll = checkedCount === this.conditions.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.conditions.length;
      }
    },
    mounted () {
      this.allConditions = arrayValue;
      this.conditions = this.allConditions;
    }
  }
</script>

<style lang="scss" scoped>
.check-box {
  height: 440px;
  width: 520px;
  padding-top: 10px;
  .select-all {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 6px;
  }
  .select-box {
    height: 336px;
    overflow: auto;
    .checkbox-item {
      height: 32px;
      line-height: 30px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding-left: 8px;
      margin-bottom: 6px;
    }
  }
}
</style>