function apiDoc() {
   
    var xhttp = new XMLHttpRequest();
    xhttp.setRequestHeader('Content-type','https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com')
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo3").innerHTML = this.responseText;
      }
    };

    xhttp.open("GET", "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com", true);
   
    
   // xhttp.setRequestHeader('Content-Type', 'application/json');
   xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhttp.send();
  }

