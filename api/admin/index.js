const express = require('express');
const Router = express.Router();
const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
const adminController = require('./adminController');
const middleware = require('../middleware/middleware');

Router.use(Passport.initialize());
Router.use(Passport.session());


Passport.use(new LocalStrategy(
    (username, password, done) => {
        adminController.getUserByUsername(username, (err, data) => {
            if (data) {
                bcrypt.compare(password, data.password, (err, res) => {
                    if (res) {
                        return done(null, data);
                    } else {
                        return done(null, false);
                    }
                })
            } else {
                return done(null, false);
            }
        })
    }
))

//luu email vao ss
Passport.serializeUser((user, done) => {
    console.log('ok');
    done(null, user.username);
})

//so sanh email o session voi trong db
Passport.deserializeUser((user, done) => {
    adminController.getUserByUsername(user, (err, data) => {
        if (err) {
            console.log(err);
            return (null, false);
        } else {
            if (data) {
                return done(null, data);
            } else {
                return done(null, false);
            }
        }
    })
})

Router.get('/product',middleware.confirmLogin,(req,res) => {
    res.send('login thành công');
})


Router.route('/login')
    .post(Passport.authenticate('local', {
        failureRedirect: '/admin',
        successRedirect: '/admin/product'
    }));

Router.post('/signup', (req, res) => {
    var newUser = {
        username: req.body.username,
        password: req.body.password
    }
    adminController.createUser(newUser, (err, doc) => {
        if (err) {
            console.log(err);
            res.send("loi roi");
        } else {
           res.send("done");
        }
    })

});

// test da login hay chua
Router.get('/private', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('bạn đã login');
        console.log(req.user);
    } else {
        res.send('bạn chưa login');
    }
})
//tao tai khoan


// logout
Router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});



module.exports = Router;
