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
    var inputdate = d3.select("#datetime");
    var inputcity = d3.select("#city");
    var inputstate = d3.select("#state")
    var inputcountry = d3.select("#country");
    var inputshape = d3.select("#shape");

  // Get the value property of the input element
    var inputValue = inputdate.property("value") ||
                     inputcity.property("value").toLowerCase() ||
                     inputstate.property("value").toLowerCase() ||
                     inputcountry.property("value").toLowerCase() ||
                     inputshape.property("value").toLowerCase();

  //console log the search value
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue ||
                                                     tableData.city === inputValue ||
                                                     tableData.state === inputValue ||
                                                     tableData.country === inputValue ||
                                                     tableData.shape === inputValue);

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

////////////////////////////////////////////////
// Select the button and form
var button = d3.select("#reset");

// Create event handlers 
button.on("click", reset);

function reset() {
  document.getElementById("datetime").value ="";
  document.getElementById("city").value = "" ;
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
   document.getElementById("shape").value = "";
}
