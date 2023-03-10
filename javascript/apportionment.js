const csv_text_area = document.getElementById('csv-data');
const csv_data = csv_text_area.value;

// Split the CSV data into rows
const rows = csv_data.split('\n');

// Extract the headers from the first row
const headers = rows[0].split(',');

// Create an array of objects representing the data
const data = [];

for (let i = 1; i < rows.length; i++) {
  const columns = rows[i].split(',');

  const rowData = {};

  for (let j = 0; j < columns.length; j++) {
    rowData[headers[j]] = columns[j];
  }

  data.push(rowData);
}

console.log(data);
