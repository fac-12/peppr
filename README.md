# peppr

![](https://travis-ci.org/fac-12/peppr.svg?branch=master)

## The Project
Peppr is a recipe web application, allowing users to save recipes from elsewhere on the web (or offline!) so that they can view them easily.

### User stories
* The user needs a way to save recipes so that he/she can easily find them
* The user needs to be able to securely log in to view their saved recipes
* The user needs a way to easily store recipe information from other websites
* The user would like to be able to edit their recipes before saving them

### Running our project locally
Our project is [hosted on Heroku](https://peppr.herokuapp.com/recipes), but if you would like to run it locally please follow these intructions:

**Requirements**
Postgres, Node

**Installation**
```
git clone https://github.com/fac-12/peppr.git && cd peppr npm i
```

And for our client side:
```
cd client && npm i
```
Create a `config.env` file in the root directory with the following environment variables:
- `PEPPR_DB_URL = ` (a url to a PostgreSQL Database, setup with our `db_build.sql`)
- `PEPPR_DB_TEST_URL = ` (a url to an empty PostgreSQL Database)
- `SECRET = ` (a secret sequence of letters / numbers for signing JWT tokens)

**Run a Dev Server**
`npm run dev`

**Test Scripts**
`npm run test`


## How we built it

### Design Week!

![](https://i.imgur.com/VQqUTLu.jpg)



### Build Weeks



### Future features
There are a huge amount of features that we would like to implement, but given more time, our next steps would have been:
* Filtering / sorting / search functionality
* A chrome extension allowing users to save a recipe directly from a third-party website