# Peppr

## The Project
Peppr is a recipe web application, allowing users to save recipes from popular recipe sites on the web so that they can view them easily.

![](https://i.imgur.com/pgZbfEP.gif)

### Running our project locally
Our project is [hosted on Heroku](https://peppr.herokuapp.com/recipes), but if you would like to run it locally please follow these instructions:

**Requirements**

PostgreSQL, Node

**Installation**
```
git clone https://github.com/fac-12/peppr.git && cd peppr && npm i
```

And then:
```
cd client && npm i
```
Create a `config.env` file in the root directory with the following environment variables:
- `PEPPR_DB_URL = ` [a url to a PostgreSQL Database, setup with our `db_build.sql`]
- `PEPPR_DB_TEST_URL = ` [a url to an empty PostgreSQL Database]
- `SECRET = ` [a secret sequence of letters / numbers for signing JWT tokens]

**Run a Dev Server**

```
npm run dev
```


**Test Scripts**
```
npm run test
```

## How we Built it: Design Week

Design week was our chance to identify the core problem that we were trying solve, decide who our target audience was, and agree exactly what the minimum product would be in order to meet their needs.

We did this by: 
* Answering the 5Ws and constructing a hypothesis (who, what when, where and why)
* Conducting secondary research
* Creating user personas
* Carrying out 'point-of-view' and 'how might we?' exercises
* Narrowing everything down to one user journey
* Prototyping using Figma and Invision
* Carrying out user testing & interviews


![](https://i.imgur.com/VQqUTLu.jpg)

### Problem Statement
Our user persona needs to organise recipes so that they can efficiently access them

### User stories
* The user needs a way to save recipes so that he/she can easily find them
* The user needs to be able to securely log in to view their saved recipes
* The user needs a way to easily store recipe information from other websites
* The user would like to be able to edit their recipes before saving them


## Two Week Build Sprint

Design week was followed by a two week build sprint.

We decided that our core functionality was to enable the user to:

1. Add recipes from popular UK online recipe websites by inputting a URL
2. Login and logout securely, so that they can save recipes to their own account

We broke our designs down into a component hierarchy, a really useful exercise which helped bring clarity and consistency to the project:

![](https://i.imgur.com/mEUEnuK.jpg)


We created a number of ['epic' issues on GitHub](https://github.com/fac-12/peppr/labels/epic), each of which linked through to smaller sub issues, so that we could track what we were working on, effectively prioritise, and relate issues back to our commits.

### Tech Stack
React | Redux | React Router DOM | Express
 | Node | PostgreSQL

#### Middleware, Services & NPM modules
Redux Form | Redux Thunk | Axios | Lodash | Passport | Bcrypt | PG-Promise | Cheerio


## Planning for the next sprint

At the end of these two weeks, we carried out further user testing. 

Based on our user feedback, we decided that given a second sprint, we would have redesigned our add a recipe page to create more unified design once the user has entered the app:

![](https://i.imgur.com/DVLyYe9.jpg)

## Future features
There are a huge amount of features that we would like to implement, but given more time, our next steps would have been:
* Filtering / sorting / search functionality
* A chrome extension allowing users to save a recipe directly from a third-party website


