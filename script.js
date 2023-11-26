// text inputs
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");

// buttons
var add = document.getElementById("add");
var removeFirst = document.getElementById("removeFirst");
var removeLast = document.getElementById("removeLast");

// Add row

add.addEventListener("click", function () {
    if (firstName.value === "" || lastName.value === "" || age.value <= 0) {
        alert("Įveskite duomenis");
        return;
    }

    // Creating elements for the row

    var addTable = document.createElement("tr");

    var cell1 = document.createElement("td");
    cell1.textContent = firstName.value;
    addTable.appendChild(cell1);

    var cell2 = document.createElement("td");
    cell2.textContent = lastName.value;
    addTable.appendChild(cell2);

    var cell3 = document.createElement("td");
    cell3.textContent = age.value;
    addTable.appendChild(cell3);

    table.appendChild(addTable);

    // Reset 
    firstName.value = "";
    lastName.value = "";
    age.value = "";
});

// Remove First Row

removeFirst.addEventListener("click", function(){
   
    var tableRows = document.querySelectorAll("#table tr");
    if (tableRows.length > 0) {
        var firstRow = tableRows[0];
        
        firstRow.parentNode.removeChild(firstRow);
    } else {
        alert("Nėra ką trinti.");
    }
});


// Remove Last Row

removeLast.addEventListener("click", function(){
   
    var tableRows = document.querySelectorAll("#table tr");
    if (tableRows.length > 0) {
        var lastRow = tableRows[tableRows.length - 1];

        lastRow.parentNode.removeChild(lastRow);
    } else {
        alert("Nėra ką trinti.");
    }
});

