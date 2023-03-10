const csv_data_text_area = document.getElementById('csv-data');
const submit_button = document.getElementById('submit-btn');
submit_button.addEventListener('click', () => {
  const csv_data = csv_data_text_area.value;

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

  const output_element = document.getElementById('output');

  const str_array = []
  for (let i = 0; i < data.length; i++)
  {
    for (let j = 0; j < columns.length; j++)
    {
      str_array.push(data[i][headers[j]])
    }
  }

  output_element.innerHTML = str_array.join(" ");
});
