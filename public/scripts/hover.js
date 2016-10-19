$(document).ready(function(){

// @description: hover function to highlight tweet and interactive buttons

  $('article').hover(function(){
    $('.icons', this).addClass("appear");
    $('header', this).addClass("hover");

    }, function(){
    $('.icons', this).removeClass("appear");
    $('header', this).removeClass("hover");
  });



});