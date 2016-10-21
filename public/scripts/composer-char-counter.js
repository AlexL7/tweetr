'use strict';
$(document).ready( () => {

  //@description: counts the characters in the form and changes css if it exceeds max.

  $('textarea').on("keyup", () => {
    const maxlength = 140;
    const textlength = $(this).val().length;
    const lengthremain = maxlength - textlength;
    $('span.counter').text(lengthremain);

    if (lengthremain < 0){
      $('span.counter').addClass("red");
    } else {
      $('span.counter').removeClass("red");
    }
  })
});
