<!--  -->
<template>
  <div class="status-select">
    <el-select v-model="value" placeholder="请选择">
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
      options: [{
        value: '1',
        label: '已完成'
      }, {
        value: '2',
        label: '未完成'
      }],
      value: ''
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>