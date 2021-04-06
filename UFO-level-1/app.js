// from data.js
const sightings = data;

// Select the button
// Select the form
let button = d3.select("#filter-btn"),
    form = d3.select("#datetime");


    // Need to append all the rows of sightings dataset
// list.append("li").text("datetime");
// list.append("li").text("city");
// list.append("li").text("state");
// list.append("li").text("country");
// list.append("li").text("shape");
// list.append("li").text("durationMinutes");
// list.append("li").text("comments");

// const sighting = [["datetime", datetime], ["city", city], ["state", state], 
// ["country", country], ["shape", shape], ["durationMinutes", durationMinutes], ["comments", comments]];
// sightings.forEach(sightings => list.append("li").text(`${sightings[0]}: ${sightings[6]}`));
// sightings.forEach(([type, value]) => list.append("li").text(`${type}: ${value}`));

function filterTable(date) {
    let filteredData = sightings.filter(sighting => sighting.datetime === date)
    return filteredData
}

// Complete the event handler function for the form
const runEnter = () => {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get a reference to the table body
    const tbody = d3.select("tbody");

     // Select the input element and get the raw HTML node
     // Get the value property of the input element
    let inputElement = d3.select("#datetime"),
    inputValue = inputElement.property("value");

    // Need to clear all rows before append new rows
    tbody.html(" ");

    // Use d3 to update each cell's text with UFO report values (datetime, city, state, country, shape, durationMinutes, comments)
    let filterResults = filterTable(inputValue)
    console.log(filterResults);
    filterResults.forEach(sighting => {
    let row = tbody.append("tr");
    Object.values(sighting).forEach(value => {
    // Append a cell to the row for each value in the UFO report object
    var cell = row.append("td");
    cell.text(value);
    });

});

console.log(inputValue);


};

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);