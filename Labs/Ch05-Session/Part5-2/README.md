# Chapter 5 Exercise 2: Session storage via the database

## Objectives:
	* Use connect-session-knex to store the session info in the db

## Steps 

1. If you successfully completed the last exercise, continue with your project. Otherwise copy the solution from the last exercise.

1. Do an npm install for connect-session-knex ad add it to package.json.

1. In `app.js`, before `router.use(expressSession({` require `connect-session-knex`  and pass in expressSession.
	
	```
	const connectSessionKnex = require("connect-session-knex")(expressSession);
	```

1. Update the use of expressSession to have a property called store, and use `connectSesionKnex` to create a new db session as follows:	
	``` javascript
	router.use(expressSession({
		secret: config.secret,
		resave: false,
		saveUninitialized: false,
		store: new connectSessionKnex({
			knex: db
		})
	}));
	```

1. Test the http://localhost:3000/ site and notice the newly added knex logging messages about storing the session in the db. Check the database and see the new session table that is being used.