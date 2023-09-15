

<div align="center">

# E-commerce-Database

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
[![MySQL Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=mysql2&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
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
You’ll need to use the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect your Express.js API to a MySQL database and the dotenv packageLinks to an external site. to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the schema.sql file in the db folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

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



