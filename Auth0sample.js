// Job Model:
// jobSchema include{
// email: String
// };

const { appendFile } = require('fs');
const { emitWarning } = require('process');
const verifyUser = require('./auth0');


// -------Disregard if not seeding------------

// seed.js:
// await City.create --> include{
// email: 'student@email.com'
// }



// IN server.js -->

// const verifyUser = require('./auth0');



// app.use(verifyUser);
