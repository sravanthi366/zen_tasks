/* abstract class Animal {
    petName: string
    petBread: string
    availability: number
}

// availability class
class PetAvailability extends Animal {

    constructor(name: string,petBread: string,availability: number){
        super();
        this.petName = name;
        this.petBread = petBread;
        this.availability = availability;
   }

    private pets: Array<PetAvailability> // we changed this to private too
    insertPet(name: string,petBread: string,availability: number)
    {
        var p = {petName:name, petBread:petBread,availability:availability};
        this.pets.push(p);
       
    }
    printAllPetNames(): void
    {
        this.pets.forEach(p => {
            console.log(p.petName) // will call 'get'
        })
    }
   
} */
var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Petshop = /** @class */ (function() {
    function Petshop() {
        this.allPets = [];
        this.requests = [];
    }
    Petshop.prototype.getallPets = function() {
        return this.allPets;
    };
    Petshop.prototype.getavilablePets = function() {
        var arr = [];
        this.allPets.forEach(function(element) {
            if (element.availabile == 'yes') {
                arr.push(element);
            }
        });
        return arr;
    };
    Petshop.prototype.insert = function(animal) {
        this.allPets.push(animal);
    };
    Petshop.prototype.getpetsbyname = function(value) {
        var arr = [];
        this.allPets.forEach(function(element) {
            if (element.name === value) {
                arr.push(element);
            }
        });
        return arr;
    };
    Petshop.prototype.getpetsbybreed = function(value) {
        var arr = [];
        this.allPets.forEach(function(element) {
            if (element.breed === value) {
                arr.push(element);
            }
        });
        return arr;
    };
    Petshop.prototype.getpetsbyPrice = function(value) {
        var arr = [];
        this.allPets.forEach(function(element) {
            if (element.price === value) {
                arr.push(element);
            }
        });
        return arr;
    };
    Petshop.prototype.getavilablePetsCount = function() {
        var arr = {
            'Dogs': 0,
            'Cats': 0,
            'Horse': 0
        };
        this.allPets.forEach(function(element) {
            if (element.availabile == 'yes') {
                if (element.type === 'Dog') {
                    arr.Dogs++;
                } else if (element.type === 'Cat') {
                    arr.Cats++;
                } else if (element.type === 'Horse') {
                    arr.Horse++;
                }
            }
        });
        return arr;
    };
    Petshop.prototype.getallRequests = function() {
        return this.requests;
    };
    Petshop.prototype.createRequestsbytype = function(request) {
        this.requests.push(request);
    };
    Petshop.prototype.createRequestsbyPrice = function(request) {
        this.requests.push(request);
    };
    Petshop.prototype.createRequestsbyName = function(request) {
        this.requests.push(request);
    };
    Petshop.prototype.createRequestsbybreed = function(request) {
        this.requests.push(request);
    };
    Petshop.prototype.getaviablepetsFor5enquries = function() {
        var avilPets = this.getavilablePets();
        var enqpets = [];
        this.requests.forEach(function(element) {
            avilPets.forEach(function(element1) {
                if (element.request === element1[element.requestType]) {
                    var flag_1 = true;
                    element.requestData.push(element1);
                    enqpets.forEach(function(element2) {
                        if (element2 === element1) {
                            flag_1 = false;
                        }
                    });
                    if (flag_1) {
                        enqpets.push(element1);
                    }
                }
            });
        });
        return enqpets;
    };
    return Petshop;
}());
var Enquries = /** @class */ (function() {
    function Enquries(request, requestType) {
        this.requestData = [];
        this.request = request;
        this.requestType = requestType;
    }
    return Enquries;
}());
var Availability = /** @class */ (function() {
    function Availability(availabile) {
        this.availabile = availabile;
    }
    return Availability;
}());
var Animal = /** @class */ (function(_super) {
    __extends(Animal, _super);

    function Animal(type, name, breed, availabile, price) {
        var _this = _super.call(this, availabile) || this;
        _this.type = type;
        _this.name = name;
        _this.breed = breed;
        _this.price = price;
        return _this;
    }
    return Animal;
}(Availability));
var Dog = /** @class */ (function(_super) {
    __extends(Dog, _super);

    function Dog(type, name, breed, availabile, price, typeOfCoat, sheddingType) {
        var _this = _super.call(this, type, name, breed, availabile, price) || this;
        _this.sheddingType = sheddingType;
        _this.typeOfCoat = typeOfCoat;
        return _this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function(_super) {
    __extends(Cat, _super);

    function Cat(type, name, breed, availabile, price, clawType, typeOfCoat) {
        var _this = _super.call(this, type, name, breed, availabile, price) || this;
        _this.clawType = clawType;
        _this.typeOfCoat = typeOfCoat;
        return _this;
    }
    return Cat;
}(Animal));
var Horse = /** @class */ (function(_super) {
    __extends(Horse, _super);

    function Horse(type, name, breed, color, availabile, price, size, weight, temperament) {
        var _this = _super.call(this, type, name, breed, availabile, price) || this;
        _this.color = color;
        _this.size = size;
        _this.weight = weight;
        _this.temperament = temperament;
        return _this;
    }
    return Horse;
}(Animal));
var petshop1 = new Petshop();
for (var index = 0; index < 3; index++) {
    petshop1.insert(new Dog('Dog', 'dog' + index + '', 'Samoyed', 'yes', 2000, 'DOUBLE COAT', 'Low'));
    if (index % 2 === 0) {
        petshop1.insert(new Horse('Horse', 'Horse' + index + '', 'sa', 'yellow', 'no', 2500, 12, 35, 'high'));
        petshop1.insert(new Cat('Cat', 'cat' + index + '', 'Sam', 'yes', 1000, 'DOUBLE COAT', 'Low'));
    } else {
        petshop1.insert(new Horse('Horse', 'Horse' + index + '', 'sa', 'yellow', 'yes', 2500, 12, 35, 'high'));
        petshop1.insert(new Cat('Cat', 'cat' + index + '', 'Sam', 'no', 1500, 'DOUBLE COAT', 'Low'));
    }
}
petshop1.insert(new Horse('Horse', 'Horse10', 'sa', 'yellow', 'no', 1500, 12, 35, 'high'));
console.log('All pets  :', petshop1.getallPets());
console.log('All Avilable pets' + '  ', petshop1.getavilablePets());
console.log('Avilable pets Count' + '  ', petshop1.getavilablePetsCount());
petshop1.createRequestsbytype(new Enquries('Dog', 'type'));
petshop1.createRequestsbyName(new Enquries('dog2', 'name'));
petshop1.createRequestsbybreed(new Enquries('Samoyed', 'breed'));
petshop1.createRequestsbyPrice(new Enquries(1200, 'price'));
petshop1.createRequestsbyName(new Enquries('cat2', 'name'));
console.log('All Enquries', petshop1.getallRequests());
console.log('Avilable pets as per Enquries' + '  ', petshop1.getaviablepetsFor5enquries());