const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb+srv://theAdministrator:tYFjp4wJYZ2WduUD@cluster0.9danq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

routes(app);
const server = app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

let io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('MESSAGE', data)
  });
});

// app.use()

const authConfig = {
  domain: "https://vue-iim.eu.auth0.com/",
  audience: "https://api-vue-iim/"
};

const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"]
});

app.get('/tasks', (req, res) => {
  res.send(tasks);
});

app.get('/tasks/:id', checkJwt, (req, res) => {
  const id = Number(req.params.id);
  const tasks = tasks.find(event => event.id === id);
  res.send(tasks);
});