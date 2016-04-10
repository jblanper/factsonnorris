$(document).ready(function() {
  $("#getQuote").on("mousedown", function(){
    $("#quote").css("opacity", "0");
    $(".twitter-btn").css("opacity", "0");
    $(".circle p").css("opacity", "0");
  });
  
  $("#getQuote").on("mouseup", function(){
    $.getJSON("http://api.icndb.com/jokes/random", function(json) {
      var text = json.value.joke;
      $(".main").html(text.match(/[\s\S]+[^\.$|!$]/).toString());
      
      $("#quote").css("opacity", "1");
      $(".twitter-btn").css("opacity", "1");
      $(".circle p").css("opacity", "1");
      
      $(".twitter-share-button").attr(
        "href", "https://twitter.com/intent/tweet?hashtags=factOnNorris&text=" + text + "&url=http://www.icndb.com"
      );
      
      var btnText = ["YEAAH!!", "MORE?!", "DO IT!!!", "PRESS ME!"];
      $(".circle p strong").text(btnText[(Math.floor(Math.random() * 4))]);
    });
  });
});