console.log('destructuring');
//
//Object destructuring
//

const person = {
    name: 'Yanis',
    age: 26,
    location: {
        city: 'Toulon',
        temp: 20
    }
};

// Destructure the object person
// We can rename and give a default value to our variable
// We take the value from our person object and if person.name doesn't exist
// it will return Anonymous
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`); // Yanis, Anonymous, 26

// const name = person.name;
// const age =  person.age;

// Destructure the object person.location
// We can rename the values of our object
const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`); // Toulon, 20
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

if (publisherName) {
    console.log(publisherName); // Penguin, Self-Published
}


//
// Array destructuring
//

const address = ['194 Rue Arnaud', 'Toulon', 'Var', '83200']; // array of strings

const [, cty, state = 'New York'] = address;

console.log(`You're in ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}.`);

const user = {
    name: 'Yanis',
    age: 26
};

console.log({
    ...user,
    location: 'Toulon'
});