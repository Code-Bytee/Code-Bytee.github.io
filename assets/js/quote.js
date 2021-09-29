
var i = 0;
var speed = 25;
var quote;
var HttpClient = function() {
  this.get = function(url, aCallback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200)
        aCallback(request.responseText);

    }
    request.open("GET", url, true);
    request.send(null);
  }
}
function typeWriter() {
  alert(quote.content.length);
  if (quote.content.length < 79) {
    document.getElementById("msg").innerHTML += quote.content;
    
    document.getElementById("author").innerHTML =
  
    quote.author;

  
  }
  else{
  typeWriter();
}
}

function getQuote() {

  if (i > 0) {
    document.getElementById("author").innerHTML = "";
    document.getElementById("msg").innerHTML = "";
   
  }
  client = new HttpClient();
  client.get("https://api.quotable.io/random", function(res) {
    quote = JSON.parse(res);
    //  alert(quote.content);
    typeWriter();

  });



}
getQuote();
