//METHOD FOR STRING:-
//1.Length method:-
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo5").innerHTML = txt.length;


//2.Index method:-
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo6").innerHTML = pos;

//3.last index method:-
var str1 = "Please locate where 'locate' occurs!";
var pos1 = str.lastIndexOf("locate");
document.getElementById("demo7").innerHTML = pos1;

//4.The search() method:-
var str2 = "Please locate where 'locate' occurs!";
var pos2 = str.search("locate");
document.getElementById("demo8").innerHTML = pos2;