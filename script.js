"use strict"

var vardas = document.getElementById("vardas")
var pavarde = document.getElementById("pavarde")
var amzius = document.getElementById("amzius")


function myCreateFunction() {
    if (amzius.value > 0 && vardas.value != "" && pavarde.value != "") {
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = vardas.value;
        cell2.innerHTML = pavarde.value;
        cell3.innerHTML = amzius.value;
    }
    if (amzius.value <= 0 || vardas.value == "" || pavarde.value == "") {
        alert("Uzpildykite visus langelius")
    }
}

function myDeleteFunction() {

    document.getElementById("myTable").deleteRow(0);

}

function DeleteFunction() {
    document.getElementById("myTable").deleteRow(-1);
}