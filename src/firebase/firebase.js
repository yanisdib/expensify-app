import * as firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyCcNN13-MuHE6f8MXKI_GNWk6t_E1frUmg",
//     authDomain: "yns-expensify.firebaseapp.com",
//     databaseURL: "https://yns-expensify.firebaseio.com",
//     projectId: "yns-expensify",
//     storageBucket: "yns-expensify.appspot.com",
//     messagingSenderId: "690008666736",
//     appId: "1:690008666736:web:308966c7ac7362b3453ab5",
//     measurementId: "G-8WJEJBKK9Y"
// };

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
console.log(`Database url is: ${process.env.FIREBASE_API_KEY}`)

firebase.initializeApp(config);

const database = firebase.database();
export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     console.log('Data removed!')
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     console.log('Data changed!');
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     console.log('Data added!');
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//             console.log(expenses);
//         });
//     }).catch((e) => { console.log('Failure.', e) });


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//             console.log(expenses);
//             console.log('Database successfully updated!');
//         });
//     }, (e) => { console.log('Failure', e) });


// Create three expenses into the database
// database.ref('expenses').push({description: 'Rent', note: 'Price increased this month.', amount: 650, createdAt: 150000});
// database.ref('expenses').push({description: 'Driver license', note: 'One time expense.', amount: 1500, createdAt: 180000});
// database.ref('expenses').push({description: 'Coffee', note: 'At Starbucks Coffee with friends.', amount: 8, createdAt: 45000});


// database.ref('notes').push({
//     title: 'React developer course',
//     body: 'I\'ve been learning React and everything related to it.'
// });

// database.ref('notes/-M4tO7ZBj-dBs8-vK0G').update({
//     title: 'Better React course',
//     body: 'This course is amazing!'
// });

// database.ref('notes/-M4tO7ZBj-dBs8-vK0G').remove();

// const firebaseNotes = {
//     notes: {
//         id: {
//             title: 'First note',
//             body: 'This is my first note. Be kind!'
//         },
//         id: {
//             title: 'First note',
//             body: 'This is my first note. Be kind!'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'Hello, this is my first note. Be kind!'
// },
// {
//     id: '13',
//     title: 'Another note',
//     body: 'Hello, this is another note. Read it later!'
// }];

// database.ref('note').set(notes);

// Setup data sub 
// Change the data and make sure it reprints.

// database.ref().set({
//     name: 'Yanis Dib',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Amazon'
//     },
//     location: {
//         city: 'Seattle',
//         country: 'United States'
//     }
// });
// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//     }, (e) => {
//         console.log('Failure.', e);
//     });

// setTimeout(() => {
//     database.ref('job/company').set('Apple');
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 5000);

// setTimeout(() => {
//     database.ref('job/company').set('Square Enix');
// }, 6500);

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (e) => {
//         console.log("Error with data fetching", e);
//     });


// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val(); // returns the data we requested
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Failure. Couldn\'t fetch data', e);
//     });

// database.ref().set({
//     name: 'Yanis Dib',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Toulon',
//         country: 'France'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('The request has failed. Error: ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data successfully updated!');
// }).catch((e) => {
//     console.log('Data update has failed. Error: ', e);
// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Data removed successfully!');
//     })
//     .catch((e) => { console.log('Failed at removing data. Error: ', e) });