function osDescription(event) {
    event.preventDefault();
    var data = document.getElementById("data");
    var str = data.value
var array = str.split(" ");
console.log("The OS name is " + array[0] + " and version is " + array[1]) 
  }