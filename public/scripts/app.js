/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 'use strict';
$(document).ready(function(){

// @description : joins the converted tweet data into one continuous html string
//                and attaches it to the page





function renderTweets(tweetdata){

  var htmlString = '';

  tweetdata.forEach(function(tweetelm) {
    htmlString = createTweetElement(tweetelm) + htmlString ;
  });
  $('#tweets-container').empty();
  var $tweets = $('#tweets-container').prepend(htmlString);
  return $tweets;
}





// @description: converts the tweet object data into an html string

function createTweetElement (tweetobj){
 const dayswithdecimals = ((tweetobj.created_at)/(1000*60*60*24))%7;
 const days = Math.round(dayswithdecimals*10)/10;
 var html_data = `<article class="tweet"><header><img class= "profilepic" src="${tweetobj.user.avatars.small}">
          <div class="username"> ${tweetobj.user.name}</div>
            <div class="tag">${tweetobj.user.handle}</div>
          </header>
            <div class="tweettext">${escape(tweetobj.content.text)}</div>
          <footer>
            <div class="time">${days} days ago </div>
            <div class="icons"> 🏴  🔁  ❤ </div>
          </footer></article>`;

  return html_data;
}
// @description : escape function to prevent cross-stie scripting

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//@description: loads json data into tweets for the page

function loadTweets (_cb){
 const ROOT_URL = 'http://localhost:8080';

     $.ajax({
            method: 'GET',
            url: `${ROOT_URL}/tweets`,
            dataType: 'json',
            success: (incomingtweets) => {
              _cb(incomingtweets);
            }

      });

};

//@description: takes in new-tweet submission and checks for errors
//              and sends post to server.

 const tweetsubmit = () => {
    $("form").submit(function(ev){
      (ev).preventDefault();
      const textcontent = $('#tweettextsub').val();

      if(textcontent === ''){
         $("#error").text("Input Empty, please tweet");
         return error;
      }
       if(textcontent.length > 140){
        $("#error").text("Tweet too long. MAX 140 characters");
        return error
      }

        $("#error").empty();


         $.ajax({
            method: 'POST',
            url: "/tweets",
            data: $('form').serialize(),
            success: (response) => {
              loadTweets(renderTweets);
            },
    });
         $('#tweettextsub').val('');
         $('span.counter').text('140')
    });


  }



tweetsubmit();
loadTweets(renderTweets);
});
