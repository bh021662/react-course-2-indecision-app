const add = function(a,b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55,1,1001));

// Arguments object - no longer bound with arrow functions

const addArrow = (a,b) => {
   // console.log(arguments);
    return a + b;
};

console.log(addArrow(55,1,1001));

// this keywor - no longer bound with arrow functions

const user = {
    name: 'Bobbi',
    cities: ['LFK', 'Indy', 'Biloxi'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        const that = this;

        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

const userArrow = {
    name: 'Bobbi',
    cities: ['LFK', 'Indy', 'Biloxi'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

userArrow.printPlacesLived();

const userArrow2= {
    name: 'Bobbi',
    cities: ['LFK', 'Indy', 'Biloxi'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(userArrow2.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
