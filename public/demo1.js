    //定义表格列
    var columnDefs = [
      { headerName: '姓名', field: 'name','pinned': 'left',width:120 },
      { headerName: '性别', field: 'sex' },
      { headerName: '年龄', field: 'age' },
      { headerName: '籍贯', field: 'jg' },
      { headerName: '省份', field: 'sf' },
      { headerName: '地址', field: 'dz' },
  ];

  //与列对应的数据; 属性名对应上面的field
  var data = [
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
  ];

  //顶部合计行
  var topRows=[
    { name: '顶部合计行', sex: 'X', age: '15', 'jg': '中国', 'sf': '顶部1', 'dz': '杭州市文一西路' } 
  ];

  //底部合计行
  var botRows=[
    { name: '置顶行1', sex: 'X', age: '15', 'jg': '中国', 'sf': '顶部1', 'dz': '杭州市文一西路' },
    { name: '置顶行2', sex: 'X', age: '15', 'jg': '中国', 'sf': '顶部2', 'dz': '杭州市文一西路' }
  ];

  //将列和数据赋给gridOptions 
  var gridOptions = {
      rowHeight :40, //设置行高为30px,默认情况下是25px   
      columnDefs: columnDefs,
      rowData: data,
      onGridReady: function () {
          //表格创建完成后执行的事件
          gridOptions.api.sizeColumnsToFit();//调整表格大小自适应
      },
      // defaultColDef: {
      //     editable: true,//单元表格是否可编辑
      //     enableRowGroup: true,
      //     enablePivot: true,
      //     enableValue: true,
      //     sortable: true, //开启排序
      //     resizable: true,//是否可以调整列大小，就是拖动改变列大小
      //     filter: true  //开启刷选
      // },
      pagination: true,  //开启分页（前端分页）
      paginationAutoPageSize: true, //根据网页高度自动分页（前端分页）
      pinnedTopRowData:topRows, //顶部合计行
      pinnedBottomRowData:botRows ,//顶部合计行
      //*******设置选择列********
      // rowSelection: 'multiple', //设置多行选中 single 表示只能选中一行
      // rowMultiSelectWithClick:true, 
      // rowDeselection:true,
      //**************设置置顶行样式**********
      getRowStyle: function (params) { 
        if (params.node.rowPinned) {   
          return {'font-weight': 'bold','color':'red'};
        }
      },
  };
  //在dom加载完成后 初始化agGrid完成
  document.addEventListener("DOMContentLoaded", function () {
      var eGridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(eGridDiv, gridOptions);
  });

  //*******设置选择列--获取选中行********
  function getSelect() {
    alert(JSON.stringify(gridOptions.api.getSelectedRows())); 
  }