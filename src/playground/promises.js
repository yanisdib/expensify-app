const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Yanis',
            age: 26
        });
        // reject('Something went wrong!');
    }, 5000);
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then(() => {
    console.log('Does this run?')
}).catch((error) => {
    console.log('Error: ', error);
});

console.log('After');