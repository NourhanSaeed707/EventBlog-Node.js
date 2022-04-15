const express = require("express");
const app = express();
const db = require("./config/database");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");

//bring events routes
const events = require("./routes/events-routes");

//bring users routes
const users = require("./routes/users-routes");


//bring body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//session and flash config
app.use(session({
   secret: 'nour',
   resave: false,
   saveUninitialized: false,
   cookie: {maxAge: 60000 * 15}
}));
app.use(flash());

//bring passport 
app.use(passport.initialize());
app.use(passport.session());

//store user object 
app.get('*', (req, res, next) => {
   res.locals.users = req.user || null 
   next();
})

app.get('/', (req, res) => {
   res.redirect('/events');
})

//bring events routes.
app.use('/events',events);
//bring users routes.
app.use('/users',users);

//using ejs template.
app.set('view engine','ejs');

//bring static so proj can see public folder.
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('node_modules'));

//listen to port
app.listen(3000, () => {
 console.log("listening to port 3000");
});