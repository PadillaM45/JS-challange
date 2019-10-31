
var tbody = d3.select("#target-table-display");


var submitButton = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");

var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#cityname");

var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#statename");

var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#countryname");


var shapesubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shapename");


data.forEach(obj => {

    var tRow = tbody.append("tr");

    Object.entries(obj).forEach(([key,value]) => {

        var tData = tRow.append("td");

        tData.text(value);
    });
});


submitButton.on("click", function() {
      
    tbody.html("");

    d3.event.preventDefault();

    console.log("You have just clicked the ' Date Time Filter Button'.");

    var inputField = d3.select("#datetime");

    var inputElement = inputField.property("value");

    console.log(inputElement);

    var inputTypeArray = data.filter(one => one.datetime === inputElement);   
    console.log(inputTypeArray)

    

    inputTypeArray.forEach((selection) => {

        var row = tbody.append("tr");

        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");

            cell.text(value);
        });
    });      
});
