const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


//To sync the models to the database we just need to add a bit of code to our app.listen() function
sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});