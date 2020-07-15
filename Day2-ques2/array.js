//METHOD FOR ARRAY:-

//covert array to string:-
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits.toString();


//join method:-
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits.join(" * ");


//pop method:-
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
document.getElementById("demo3").innerHTML=fruits


//push method:-
function my() {
    fruits.push("Kiwi");
    document.getElementById("demo4").innerHTML = fruits;
  }







