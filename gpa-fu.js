var rows = document.getElementsByClassName("table table-hover")["0"].rows;
var sum = 0;
var tin = 0;
for (i = 1; i < rows.length; i++) {
var ispassed = rows[i].cells[8].innerText == "Passed";
    if (rows[i].cells[7].innerText.length > 0 && ispassed && parseFloat(rows[i].cells[7].innerText)>0) {
        sum += (parseFloat(rows[i].cells[7].innerText)*parseFloat(rows[i].cells[6].innerText));
        tin += parseFloat(rows[i].cells[6].innerText);
    }
}
alert("GPA : " + Math.round(sum * 100 / tin) / 100);