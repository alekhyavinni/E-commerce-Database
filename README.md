

<div align="center">

# E-commerce-Database

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)

</div>

# description
A back end for e-commerce website that uses the latest technologies-Express.js API to use Sequelize to interact with a MySQL database.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Contact](#contact)

## Installation
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source schema.sql`. Log out of MySQL with command `\q`.
* Seed database with command `npm run seed`.

## Usage
* GIVEN a functional Express.js API
*WHEN I add my database name, MySQL username, and MySQL password to an environment variable fileTHEN *I am able to connect to a database using Sequelize
*WHEN I enter schema and seed commands
*THEN a development database is created and is seeded with test data
*WHEN I enter the command to invoke the application
*THEN my server is started and the Sequelize models are synced to the MySQL database
*WHEN I open API GET routes in Insomnia for categories, products, or tags
*THEN the data for each of these routes is displayed in a formatted JSON
*WHEN I test API POST, PUT, and DELETE routes in Insomnia
*THEN I am able to successfully create, update, and delete data in my database

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

This project was created as a challenge assignment for the UT Full Stack Boot Camp. Contact me with any ideas or requests.

## Contact
  If you have any questions about this projects, please contact me directly at alekhyavinni12@gmail.com. You can view more of my projects at https://github.com/alekhyavinni



