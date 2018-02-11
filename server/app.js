import express    from 'express';
import webpack    from 'webpack';
import path       from 'path';
import config     from '../webpack.config';
import bodyParser from 'body-parser';
import morgan     from 'morgan';
import * as admin from 'firebase-admin';

const app      = express();
const compiler = webpack(config);


var serviceAccount = require('./probudget-db3b8b45c0df.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://probudget-fb997.firebaseio.com'
});


app.use(morgan('dev'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log('------------------- >>> This is default get route <<< -------------------');
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get('/sw-toolbox.js', function(req, res) {
  console.log('------------------- >>> This is /node_modules/sw-toolbox/sw-toolbox.js <<< -------------------');
  res.sendFile(path.join( __dirname, '..//node_modules/sw-toolbox/sw-toolbox.js'));
});

app.get('/worker.js', function(req, res) {
  console.log('------------------- >>> This is service worker route <<< -------------------');
  res.sendFile(path.join( __dirname, '../src/worker.js'));
});

app.get('/manifest.json', function(req, res) {
  console.log('------------------- >>> This is progressive webapp route <<< -------------------');
  res.sendFile(path.join( __dirname, '../src/manifest.json'));
});


/** -------------------------- Firebase Admin work ------------------------- **/

app.get('/api/auth/create/user', function(req, res) {
  
  admin.auth().createUser({
    email: "veerareddy.obula@gmail.com",
    emailVerified: false,
    phoneNumber: "8105555322",
    password: "veera@168",
    displayName: "Veera Reddy",
    photoURL: "http://www.example.com/12345678/photo.png",
    disabled: false
  })          
  .then(function(userRecord) {
    console.log("Successfully created new user:", userRecord.uid);
    res.send(userRecord);
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
    res.send(error);
  });
  
});

app.post('/api/auth/find/user', function(req, res) {
  console.log(req.body);
  var email = 'veerareddy.obula@gmail.com';
  admin.auth().getUserByEmail(email)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
    res.send(userRecord);
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
    res.send(error);
  });
  
});


console.log('App.js Get Environment instance -- '+process.env.instance);
let instance;
if(process.env.instance){
  instance= process.env.instance
}else{
  instance = 'dev';
}


var port = Number( process.env.PORT || 8080 );
app.listen(port, function(){
  console.log( "Listening on port " + port );
});