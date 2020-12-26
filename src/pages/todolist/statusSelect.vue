<!--  -->
<template>
  <div class="status-select">
    <el-select
      v-model="value"
      placeholder="请选择"
      @change="selectHandle">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: '-1',
          label: '全部'
        },
        {
          value: '1',
          label: '待办'
        },
        {
          value: '2',
          label: '完成'
        },
        {
          value: '3',
          label: '删除'
        }
      ],
      value: ''
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    selectHandle (val) {
      this.$emit('selectStatus', val)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>