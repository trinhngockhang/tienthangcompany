const adminModel = require('./adminModel');

var getUserByUsername = (username, callback) => {
    try {
        adminModel.findOne({ username: username }).exec((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                return callback(null, doc);
            }
        })
    } catch (e) {
        console.log(e);
        callback(e);
    }
}

var createUser = (data, callback) => {
    adminModel.create(data, (err, doc) => {
        if (err) {
            console.log(err);
            console.log('message', err.message);
            callback(err);
        } else {
            callback(null, doc);
        }
    })

}
module.exports = {
    getUserByUsername,
    createUser
}