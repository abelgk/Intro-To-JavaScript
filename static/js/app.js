// Get references to the tbody element, input field and button

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $resetBtn = document.querySelector("#reset");
// event listener for searchButton to invoke handleSearchButtonClick

$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", resetData);

// Set filteredData var to the contents of data dict
var filteredData = data; 
var resetData = data;
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get current address object and its fields
    var myData = filteredData[i];
    var fields = Object.keys(myData);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // create a new cell and set the inner text to current adress object value
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = myData[field];

    }

  }

}
function handleSearchButtonClick(event) {
  // prevent page from refreshing
   event.preventDefault();
   var filterDate = $dateInput.value.trim();
   if (filterDate != "") { 
     filteredData = filteredData.filter(function (data) { 
       var dataDate = data.datetime; 
       return dataDate === filterDate; 
     });
 }; 
   var filterCity = $cityInput.value.trim().toLowerCase(); 
   if (filterCity !="") { 
     filteredData = filteredData.filter(function(data) { 
       var dataCity = data.city.toLowerCase();
       return dataCity === filterCity; 
     }); 
   }; 
   var filterState = $stateInput.value.trim().toLowerCase(); 
   if (filterState !="") { 
     filteredData = filteredData.filter(function(data) { 
       var dataState = data.state.toLowerCase(); 
       return dataState === filterState; 
     }); 
   };  
   var filterCountry = $countryInput.value.trim().toLowerCase(); 
   if (filterCountry!="") { 
     filteredData = filteredData.filter(function(data) { 
       var dataCountry = data.country.toLowerCase(); 
       return dataCountry === filterCountry; 
     }); 
   }; 
   var filterShape = $shapeInput.value.trim().toLowerCase(); 
   if (filterShape) { 
     filteredData = filteredData.filter(function(data) { 
       var dataShape = data.shape.toLowerCase(); 
       return dataShape === filterShape; 
     }); 
   };
     renderTable(); 
   }      
  
  function resetData() {  
    filteredData = data;
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";
    renderTable();
  
  }

  function resetForm() {
  
    document.getElementById("myForm").reset();
  
  }
renderTable();