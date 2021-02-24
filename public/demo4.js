// 官网文档 Columns - Column Definitions

// const columnDefs = [
//   { headerName: 'Athlete', field: 'athlete' },
//   { headerName: 'Sport', field: 'sport' },
//   { headerName: 'Age', field: 'age' },
// ];
const columnDefs = [
  {
      headerName: 'Group A',
      children: [
          { headerName: 'Athlete', field: 'athlete' },
          { headerName: 'Sport', field: 'sport' },
          { headerName: 'Age', field: 'age' },
      ]
  }
];

const gridOptions = {
  columnDefs: columnDefs,
};

// // lookup the container we want the Grid to use
// const eGridDiv = document.querySelector('#myGrid');

// // create the grid passing in the div to use together with the columns & data we want to use
// new agGrid.Grid(eGridDiv, gridOptions);

document.addEventListener('DOMContentLoaded', () => {
  // lookup the container we want the Grid to use
  const eGridDiv = document.querySelector('#myGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);
})