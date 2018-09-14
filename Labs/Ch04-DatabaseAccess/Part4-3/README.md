# Chapter 4 Exercise 3: 

## Objectives:
* Add the use of bookshelf to create a User model
* Use the model to create CRUD operations in the user router
* Modify the login route to use the database

## Steps 

### Add the use of bookshelf to create a User model

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the `\Labs\Ch04-DatabaseAccess\Part4-2\Solution` and use it as your starting point - if you copy - be sure to run `npm install` and to run ```npx knex migrate:latest```

1. We will be using bookshelf - add this as a dependency to package.json.

1. In the root directory, create a copy of `db.js` and name the copy `bookshelf.js`

1. Modify the contents of bookshelf.js to require it and export it as follows:

    ```javascript
        const knex = require("knex");
        const knexconfig = require('./knexfile.js'); 
        const config = require('./config.json'); 

        const db         = require('knex')(knexconfig[config.env]);
        const bookshelf = require('bookshelf')(db);

        module.exports = bookshelf;
    ```

1.  At the root of the project, in `/lab-project` create a directory called `models` and inside create a file called `User.js`

1. In this file require bookshelf: 
    ```const bookshelf = require('../bookshelf');```

1. Declare a User object that extends built-in bookshelf Model with a table name, in this case `users` table. Use this code:

    ```javascript
    var User = bookshelf.Model.extend({
        tableName: 'users'
    });
    ```

1. Finally, export an object with User and we are done with model.
    
    ```javascript
    module.exports = {
        User: User
    };
    ```


### Use the model to create CRUD operations in the user router
1. Let's update the `routes/users.js` to:
    * Use express-promise-router
    * Use the User model and define methods for different CRUD operations
    * If you feel comfortable, try for solution, otherwise, copy the file `/Lib/Part4-3/users.js` into `routes/users.js`

1. Bring up the URL: http://localhost:3000/users - you should see JSON being returned

1. Use postman to test the POST, DELETE, GET 

GET http://localhost:3000/users
POST http://localhost:3000/users
with this data:
{
        "username": "allas",
        "password": "aaaa"
}

GET http://localhost:3000/users/3


DELETE:
http://localhost:3000/users/3


### Modify the login route to use the database

1. Let's update the /login route to use the database.

    Modify `app.js` to pass the db to `index.js`. You can pass the state object which contains the db.

1. Modify the `index.js` to do the following, if need be copy `index.js` from `Libs/Part4-3/index.js`
    * Use express promise router
    * Receive the db info 
    * Use the db info to check the database for supplied username, and see if password matches - plain text! We will use the hash version in a future exercise.
    * Export the router 
  
1. Test your work and check that the new version of /login route works. 

