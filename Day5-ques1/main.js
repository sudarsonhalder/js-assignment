var myarr = [];
function addTo() {
   myarr.push(document.getElementById("userinput").value);
   console.log(myarr);
}

function oddno()
{
var odds = myarr.filter(n => n%2);
document.getElementById("demo").innerHTML = odds;
}

function cubeno1()
{
	var odds = myarr.filter(n => n%2);
	

var txt = " ";
for(var i = 0;i< odds.length;i++)
{
	txt = Math.pow(odds[i],3) + "  ";
	console.log(txt);
}

}