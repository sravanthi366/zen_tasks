function getDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo1").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://dog.ceo/api/breeds/list/all", true);
    xhttp.send();
  }
  