'use strict';

$(document).ready(() => {
// @description: hover function to highlight tweet and compose button.


$(document).on(
  "mouseenter", ".tweet", () =>  {
    $('.icons', this).addClass("appear"),
    $('header', this).addClass("#nav-bar div hover");});
$(document).on(
  "mouseleave", ".tweet", () =>  {
    $('.icons', this).removeClass("appear"),
    $('header', this).removeClass("hover");});

$(document).on(
  "mouseenter", "#compose", () =>  {
    $(this).addClass("compose")});
$(document).on(
  "mouseleave", "#compose", () =>  {
    $(this).removeClass("compose")});

$(document).on(
  "click", "#compose", () =>  {

  let clicks = $(this).data('clicks');
  if (clicks) {
     $('#composetweet').slideDown("slow"),
     $("#tweettextsub").focus();
  } else {
     $('#composetweet').slideUp("slow")
  }
     $(this).data("clicks", !clicks);
  });
});