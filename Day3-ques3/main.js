function Marks(event) {
    event.preventDefault();
    var data = document.getElementById("data");
    var marks = data.value
    var grade ="NA";
    if (marks> 85) {
        grade='A';
    }
    else if (marks <= 85 && marks > 80) {
        grade='B';
    }
    else if (marks > 70 && marks <= 80) {
        grade='C';
    }
    else if (marks > 60 && marks<= 70) {
        grade='D';
    }
    else if (marks >= 40 && marks <= 60) {
        grade='E';
    }
    else if (marks < 40) {
        grade='F';
    }
    document.write("Marks are " + marks + ' Grade- '+grade);
}