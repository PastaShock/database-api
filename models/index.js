// import models from model files
const Users = require('./users');
const Orders = require('./orders');
const Requests = require('./requests');
const Presses = require('./presses');
const Items = require('./items');
const Roles = require('./roles')

// export
module.exports = {Users, Roles, Orders, Requests, Presses, Items};