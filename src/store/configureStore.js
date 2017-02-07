/**
Using node.js var to require the corresponding store configuration, according to 
npm script executed. We want this to 
*/

if(process.env.NODE_ENV==='production')
    module.exports = require('./configureStore.prod');
else
    module.exports = require('./configureStore.dev');