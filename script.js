(function (window) {


var names = ["Omkar", "Ajay", "Axal", "Hiamnshu", "Alex", "Aditiya", "Satyam", "Shubham", "Akshata", "Kritik"];


for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

 
  if (firstLetter == 'a') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);