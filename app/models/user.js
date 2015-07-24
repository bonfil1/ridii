/**
 * Created by joseangelbonfilevia on 23/07/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    pass: String
});

module.exports = mongoose.model('User', UserSchema);