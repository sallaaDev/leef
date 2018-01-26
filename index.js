const app           = require('express')();
const keys          = require('./config/keys');
const mongoose      = require('mongoose');
const passport      = require('passport');
const bodyPaser     = require('body-parser');
const cookieSession = require('cookie-session');

require('./models/User');
require('./service/passport');

mongoose.connect(keys.mongodbURI);

app.use(bodyPaser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/notesRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('the port 5000');
}); 