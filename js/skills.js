var lang = {
    "photoshop": "90%",
    "illustrator": "85%",
    "front-end": "75%",
    "UI": "75%",
    "microsoft": "90%"
  };
  
  var multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });