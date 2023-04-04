const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const dbConfig = require('./config/db.config')
const routes = require('./routes')
const passport = require('passport')
const { jwtStrategy } = require('./config/passport');

const app = express()

//Configuration de body-parser pour la gestion des requêtes POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Configuration de Helmet pour la sécurité de l'application
app.use(helmet());

app.use(cors())

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/', routes);

mongoose.set('strictQuery',false);
mongoose
  .connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.get('/', (req, res) => {
  res.json({message: "Bienvenue sur l'API d'authentification"})
})

const port = process.env.PORT || 2000;
app.listen(port, ()=>{
  console.log(`le serveur tourne sur le port ${port}`);
})