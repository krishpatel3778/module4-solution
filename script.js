(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<names.length;i++){
  if(names[i].substring(0,1).toLowerCase()=="j"){
    byeSpeaker.speak(names[i]);
  }else{
    helloSpeaker.speak(names[i]);
  }
  }
  window.names=names;
})(window);