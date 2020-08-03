const person = {
    firstName: "GUVI",
    lastName: "GEEK",
    age: 3,
    sex: "M"
  }
  
  const first = person.firstName;
  const age = person.age;
  const sex = person.sex;
  console.log(first) // "GUVI"
  console.log(age) // 3
  console.log(sex)
  
  const { fi, ag, se } = {fi:person.firstName,ag:person.age,se:person.sex}; // That's it !
  
  console.log(fi) // "GUVI"
  console.log(ag) // 3
  console.log(se) // M
  