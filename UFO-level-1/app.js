// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach((uforeport) => {
    var row =tbody.append('tr');

    Object.entries(uforeport).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

////////////////////////////////////////////////
// Select the button and form
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    tbody.html("");
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

  //console log the search value
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  //console log the filtered data
    console.log(filteredData);

    filteredData.forEach((filteredData) => {
        var row =tbody.append('tr');

    Object.entries(filteredData).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
  });
};

