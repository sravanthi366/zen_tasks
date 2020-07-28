// Create a request variable and assign a new XMLHttpRequest object to it.
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
  xhttp.send();
}
