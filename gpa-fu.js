var rows = document.getElementsByClassName("table table-hover")["0"].rows;
var totalGrade = 0;
var totalCredit = 0;
for (i = 1; i < rows.length; i++) {
	var isPassed = rows[i].cells[8].innerText == "Passed";
    if (rows[i].cells[7].innerText.length > 0 && isPassed && parseFloat(rows[i].cells[7].innerText)>0) {
        totalGrade += (parseFloat(rows[i].cells[7].innerText)*parseFloat(rows[i].cells[6].innerText));
        totalCredit += parseFloat(rows[i].cells[6].innerText);
    }
}
var gpa = Math.round(totalGrade * 100 / totalCredit) / 100;
alert("GPA : " + gpa +"\nThank: http://fb.com/binh.nguyenanh.5" +"\n#Vedz");