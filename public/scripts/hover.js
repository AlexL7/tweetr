$(document).ready(function(){
// @description: hover function to highlight tweet and interactive buttons


$(document).on(
  "mouseenter", ".tweet", function() {
     $('.icons', this).addClass("appear"),
     $('header', this).addClass("hover");});

$(document).on(
  "mouseleave", ".tweet", function() {
     $('.icons', this).removeClass("appear"),
     $('header', this).removeClass("hover");});



$(document).on(
  "mouseenter", "#compose", function() {
    $(this).addClass("compose")});

$(document).on(
  "mouseleave", "#compose", function() {
    $(this).removeClass("compose")});


$(document).on(
  "click", "#compose", function() {

  var clicks = $(this).data('clicks');
  if (clicks) {
     $('#composetweet').slideDown("slow"),
     $("#tweettextsub").focus();
  } else {
     $('#composetweet').slideUp("slow")
  }
  $(this).data("clicks", !clicks);
  });




});