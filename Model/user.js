var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    user_id: {type: String, required: true},
    username : { type : String , unique : true,required: true},
    password: { type : String ,required: true},
    first_name: String,
    last_name: String,
    contact_number: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
