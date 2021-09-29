
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
  

function getQuote() {
if(quote.content.length<200){
console.log(quote.content.length)
  document.getElementById("msg").innerHTML = quote.content;
  document.getElementById('author').innerHTML = quote.author;
}
else{

fetchQuote();

}

  
}
function next(){
  document.getElementById("msg").innerHTML = "";
  document.getElementById("author").innerHTML = "";
  fetchQuote();
}
function fetchQuote(){
				

client = new HttpClient();
  client.get("https://api.quotable.io/random", function(res) {
    quote = JSON.parse(res);
    getQuote();
   });   
   }
fetchQuote();
//getQuote();

 


  




				
