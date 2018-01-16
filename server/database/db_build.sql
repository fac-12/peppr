BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id) NOT NULL,
    title VARCHAR(100) NOT NULL,
    imageurl VARCHAR(200),
    ingredients TEXT,
    method TEXT,
    tags VARCHAR(100),
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password) VALUES ('Mike', 'mike@gmail.com','$2a$10$HEyV6U.nsK.0I4ICu.2tZO.Le09Kt0ni8Wl4NJChqDnvWVKDwptCq'), ('Jim', 'jim@gmail.com', '$2a$10$hTiKuROKeNPWTFNG/M7EXuF8iOeeymGx6QH1KRAAEijk31AU6UMbG');

INSERT INTO recipes (userId, title, imageurl, ingredients, method, tags) VALUES (2, 'cake', 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/rosewater-raspberry-sponge-cake.jpg?itok=OVpUSQm9', 'flour\neggs\ncream', 'make cake\n\neat it', 'party');

COMMIT;
