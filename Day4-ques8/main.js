 let ques = (question,yes,no) => (confirm(question)) ? yes() : no();

 ques("do you agree?",function() {alert("You agreed."); },function() {alert ("You cancelled the execution.");} )