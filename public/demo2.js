// 官网文档示例：getting started
const columnDefs = [
  { field: "make", checkboxSelection: true },
  { field: "model" },
  { field: "price", sortable: true, filter: true }
];

// specify the data
const rowData = [
  { make: "Toyota", model: "Celica", price: 45000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptionsaa = {
  columnDefs: columnDefs,
  // rowData: rowData
  rowSelection: 'multiple'
};

console.log(gridOptionsaa);

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    let newgrid = new agGrid.Grid(gridDiv, gridOptionsaa);
    console.log(newgrid);
    agGrid.simpleHttpRequest({url: 'https://www.ag-grid.com/example-assets/row-data.json'}).then(data => {
      gridOptionsaa.api.setRowData(data);
    });
});



