const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }
  
  console.log(removeDups(names));