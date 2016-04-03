$(document).ready(function() {
  $("#getQuote").on("mousedown", function(){
    $("#quote").css("opacity", "0");
    $(".twitter-btn").css("opacity", "0");
    $(".circle p").css("opacity", "0");
  });
  
  $("#getQuote").on("mouseup", function(){
    $.getJSON("http://api.icndb.com/jokes/random", function(json) {
      var text = json.value.joke;
      var html = $("<blockquote class='center-block blockquote-reverse'></blockquote>");
      html.append("<p><span class='main'>" + text.match(/[\s\S]+[^\.$|!$]/) + "</span><span class='big'>!</span></p>");
      html.append("<footer><a href='http://www.icndb.com'>The Internet Chuck Norris Archive</a></footer>");
      $("#quote").html(html);
      
      $("#quote").css("opacity", "1");
      $(".twitter-btn").css("opacity", "1");
      $(".circle p").css("opacity", "1");
      
      $(".twitter-share-button").attr(
        "href", "https://twitter.com/intent/tweet?hashtags=factsOnNorris&text=" + text + "&url=http://www.icndb.com"
      );
      
      var btnText = ["YEAAH!!", "MORE?!", "DO IT!!!", "PRESS ME!"];
      $(".circle p strong").text(btnText[(Math.floor(Math.random() * 4))]);
    });
  });
});
