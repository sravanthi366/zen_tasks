var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://develorper.mozilla.org/';

xmlhttp.open(method, url, true);
xmlhttp.onerror = function () {
    alert("hi");
  console.log("** An error occurred during the transaction");
};
xmlhttp.send();