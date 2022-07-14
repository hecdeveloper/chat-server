const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    online: {
        type: Boolean,
        default: false
    }
})

UserSchema.method('toJson', function() {
    const {__v, _id, ...object} = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('User', UserSchema);