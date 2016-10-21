'use strict';
$(document).ready( () => {

  //@description: counts the characters in the form and changes css if it exceeds max.

  $('textarea').on("keyup", () => {
    const maxlength = 140;
    let length = $(this).val().length;
    let length = maxlength - length;
    $('span.counter').text(length);

    if (length < 0){
      $('span.counter').addClass("red");
    } else {
      $('span.counter').removeClass("red");
    }
  })
});