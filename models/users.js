// Users Schema -----
// F_KEY: UUID
// name: Jane Doe

const { Schema, model } = require("mongoose");

// * `username`
const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        // email: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        // },
        requests: [{
            type: Schema.Types.ObjectId,
            ref: 'requests'
        }],
        presses: [{
            type: Schema.Types.ObjectId,
            ref: 'presses'
        }],
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

// **Schema Settings**:

userSchema
.virtual('requstCount')
.get( () => {
    return this.requests.length || 0;
    // return `5`
})

const User = model('user', userSchema);

module.exports = User;