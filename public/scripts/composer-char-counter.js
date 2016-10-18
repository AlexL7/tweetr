$(document).ready(function(){

    console.log("Document Ready");

  var maxlength = 140;

  $('textarea').on("keyup", function(){
    var length = $(this).val().length;
    var length = maxlength - length;
    $('span.counter').text(length);

    if (length < 0){
      $('span.counter').addClass("red");
    } else {
      $('span.counter').removeClass("red");

    }


  })

});