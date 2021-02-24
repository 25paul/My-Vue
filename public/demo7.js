// 官方文档： columns - Updating Column Definitions - Adding & Removing Columns

var colDefsMedalsIncluded = [
  { field: 'athlete' },
  { field: 'age', sortable: true, filter: true },
  { field: 'country' },
  { field: 'sport' },
  { field: 'year' },
  { field: 'date' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];

var colDefsMedalsExcluded = [
  { field: 'athlete' },
  { field: 'age' },
  { field: 'country' },
  { field: 'sport' },
  { field: 'year' },
  { field: 'date' },
];

var gridOptions = {
  defaultColDef: {
    initialWidth: 100,
    sortable: true,
    resizable: true,
  },
  // columnDefs: colDefsMedalsIncluded,
};

function onBtExcludeMedalColumns() {
  gridOptions.api.setColumnDefs(colDefsMedalsExcluded);
}

function onBtIncludeMedalColumns() {
  gridOptions.api.setColumnDefs(colDefsMedalsIncluded);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  agGrid
    .simpleHttpRequest({
      url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
    })
    .then(function (data) {
      this.onBtIncludeMedalColumns();
      gridOptions.api.setRowData(data);
    });

  
  let divDom = document.createElement('div');
  divDom.innerText = 'INCLUDE';
  divDom.onclick = onBtIncludeMedalColumns;
  let divDom1 = document.createElement('div');
  divDom1.innerText = 'EXCLUDE';
  divDom1.onclick = onBtExcludeMedalColumns;
  gridDiv.appendChild(divDom);
  gridDiv.appendChild(divDom1);
});