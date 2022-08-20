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
ran = Math.floor(Math.random() * 3 + 1)
themes = ["Megatron", 'pinkFish', 'OrangeCoral', 'cherryBlossom'];
var container = document.getElementsByClassName("container")[0];
container.classList.add(themes[ran]);
container.style.display = "flex";
console.log('Theme : ' + themes[ran]);

function getQuote() {
  if (quote.content.length < 200) {
    console.log(quote.content)
    document.getElementById("msg").innerHTML = quote.content;
    document.getElementById('author').innerHTML = quote.author;
  }
  
  else {
    fetchQuote();
  }
}

  function next() {
    document.getElementById("msg").innerHTML = "";
    document.getElementById("author").innerHTML = "";
    fetchQuote();
  }

  function fetchQuote() {
    console.log('Fetching Quote');
    client = new HttpClient();
    client.get("https://api.quotable.io/random", function(res) {
      quote = JSON.parse(res);
      getQuote();
    });
  }
  fetchQuote();
 
