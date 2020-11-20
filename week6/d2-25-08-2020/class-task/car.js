var Race = /** @class */ (function() {
    function Race() {
        this.partcipents = [];
        for (var index = 0; index < 10; index++) {
            this.partcipents.push(new Car("Car " + (index + 1)));
        }
    }
    Race.prototype.getParticepents = function() {
        return this.partcipents;
    };
    Race.prototype.start = function() {
        this.partcipents.forEach(function(car) {
            car.speed = Math.floor(Math.random() * 1000);
            car.move("LEFT");
            car.location({
                lat: 12.555,
                long: 34.898
            });
        });
    };
    Race.prototype.getResult = function() {
        var winnerCar;
        var highSpeed = 0;
        this.partcipents.forEach(function(car) {
            if (car.speed > highSpeed) {
                highSpeed = car.speed;
                winnerCar = car;
            }
        });
        this.winner = winnerCar;
        return this.winner;
    };
    return Race;
}());
var Car = /** @class */ (function() {
    function Car(carName) {
        this.name = carName;
    }
    Car.prototype.move = function(direction) {
        console.log(this.name + " is moving in " + direction + " direction");
    };
    Car.prototype.location = function(location) {};
    return Car;
}());
var race1 = new Race();
race1.start();
console.log(race1.getParticepents());
console.log(race1.getResult());