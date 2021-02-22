// 官网文档示例：getting started - grouping

const columnDefs = [
  { field: "make", rowGroup: true },
  { field: "price" }
];
// const columnDefs = [
//   { field: "make", checkboxSelection: true },
//   { field: "model" },
//   { field: "price", sortable: true, filter: true }
// ];

const autoGroupColumnDef = {
    headerName: "Model",
    field: "model",
    cellRenderer:'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
}

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  autoGroupColumnDef: autoGroupColumnDef,
  groupSelectsChildren: true,
  rowSelection: 'multiple'
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);

agGrid.simpleHttpRequest({url: 'https://www.ag-grid.com/example-assets/row-data.json'}).then(data => {
  gridOptions.api.setRowData(data);
});

const getSelectedRows = () => {
const selectedNodes = gridOptions.api.getSelectedNodes()
const selectedData = selectedNodes.map( node => node.data )
const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}` ).join(', ')
alert('Selected nodes: ' + selectedDataStringPresentation);
}