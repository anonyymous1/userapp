//ACCESSES DATABASES/MODELS
const db = require('./models');

//   CREATE DESTROY AND UPDATE WILL CONTINUE      //
//   RUNNING EVERYTIME YOU RUN NODE/NODEMON.      //
//   BE CAREFUL ON LEAVING IT UNCOMMENTED OUT.    //

//CREATE A USER INSIDE USERS TABLE
// db.user.create({
//     firstName: 'Mark',
//     lastName: 'Cedeno',
//     age: 31,
//     email: 'mark@ga.com'
// }).then (createdUser => {
//     console.log(createdUser.get());
// })

//READ FROM THE USERS TABLE FOR ONE USER
db.user.findOne({
    where: { firstName: 'Ruben' }
}).then (foundUser => {
    // console.log(foundUser.get());
})

//FIND ALL USERS
db.user.findAll().then (allUsers => {
    // console.log(allUsers);
    // console.log(allUsers[0].get());
})

//UPDATE USER INFORMATION
// db.user.update({
//     lastName: 'Bobby'
// }, {
//     where: { firstName: 'Billy'}
// }).then (numRowChange => {
//     console.log(numRowChange);
// })

//DELETE A USER
db.user.destroy ({
    where: {lastName: 'Bobby'}
}).then(rowsNumDeleted => {
    console.log(rowsNumDeleted);
})