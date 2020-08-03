function joinFirstLastName(person) { // we create firstName and lastName variables by destructuring person parameter
    return person.firstName + '-' + person.lastName;
  }
  
  const person = {
    firstName: "GUVI",
    lastName: "GEEK",
    age: 3,
    sex: "M"
  }
  
  console.log(joinFirstLastName(person)); // GUVI GEEK
  