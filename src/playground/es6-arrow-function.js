const square = function (x) {
    return x * x;
};

console.log(square(8));

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(4));

const squareArrowExp = (x) => x * x;

console.log(squareArrowExp(5));

const getFirstName = (firstName) => {
    return firstName.split(' ')[0];
}; 

console.log(getFirstName('Bobbi Henson'));

const getFirstNameExp = (firstName) => firstName.split(' ')[0];

console.log(getFirstNameExp('Andrew Mead'));