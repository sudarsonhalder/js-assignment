var x = 1;
var array = Array();

function shoppinglist()
{
 array[x] = document.getElementById("text1").value;
 alert("Item added to the shopping bucket. ");
 x++;
 document.getElementById("text1").value = "";
}

function shoppingbucket()
{
   var e = "<hr/>";   
    
   for (var y=1; y<array.length; y++)
   {
     e += "Item " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}