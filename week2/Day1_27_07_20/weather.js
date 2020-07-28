function wDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo2").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Chennai,in&appid=6ba7f072c72044920c23d2a85434856c", true);
    xhttp.send();
  }
  