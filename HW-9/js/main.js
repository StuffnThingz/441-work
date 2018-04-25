function getData(){

  var input = $("#searchtext").val();
  //AJAX request
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=QjlYLaQ9CkY6f28FpjKc6WNClLyfgKt4&limit=12");
  // Promise. changed "data" to "promise"
  xhr.done(function(response) {

    console.log("success got data", response);

  var jiffs = response.data;

  for (i in jiffs)
    {
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px; margin-left: 10px; padding: 0.5em;'/>")//setting style here
    }
  });
}

// credit to YouTuber Joshua Fluke for most of this 
