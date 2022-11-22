const { connect, connection } = require('mongoose');
const { exists } = require('../models/user');

connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`

// initialize mongoose connection with either the env or a default
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;