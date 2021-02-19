<template>
  <div id="myGrid" style="width: 100%;height: 500px;"  class="ag-theme-balham"></div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      columnDefs: [
        { headerName: '姓名', field: 'name','pinned': 'left',width:120 },
        { headerName: '性别', field: 'sex' },
        { headerName: '年龄', field: 'age' },
        { headerName: '籍贯', field: 'jg' },
        { headerName: '省份', field: 'sf' },
        { headerName: '地址', field: 'dz' },
      ],
      tableData: [
        { name: '张三', sex: '男', age: '100', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路1号' },
        { name: '李四', sex: '女', age: '5', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '女', age: '20', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路31号' },
        { name: '王五', sex: '女', age: '26', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路111号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
        { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' }
      ],
      topRows: [
        { name: '顶部合计行', sex: 'X', age: '15', 'jg': '中国', 'sf': '顶部1', 'dz': '杭州市文一西路' } 
      ],
      botRows: [
        { name: '置顶行1', sex: 'X', age: '15', 'jg': '中国', 'sf': '顶部1', 'dz': '杭州市文一西路' },
        { name: '置顶行2', sex: 'X', age: '15', 'jg': '中国', 'sf': '顶部2', 'dz': '杭州市文一西路' }
      ],
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    scrollHandle () {
      console.log(0)
    },
    scrollHandle1 () {
      console.log(1)
    },
    scrollHandle3 () {
      console.log(3)
      this.$refs.temp.style="overflow: hidden"
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 600px;
  .template {
    width: 300px;
    height: 100%;
    overflow: auto;
    color: #aaa;
    border: 1px solid red;
    &:before {
      content: "";
    }
    .appt {
      width: 200px;
      height: 2000px;
    }
    .child {
      width: 200px;
      height: 200px;
      overflow: auto;
      border: 1px solid #aaa;
      .temp {
        height: 1000px;
      }
    }
  }
}
</style>
