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

INSERT INTO users (name, email, password) VALUES ('Mike', 'mike@gmail.com','$2a$10$HEyV6U.nsK.0I4ICu.2tZO.Le09Kt0ni8Wl4NJChqDnvWVKDwptCq'), ('Jim', 'jim@gmail.com', '$2a$10$HEyV6U.nsK.0I4ICu.2tZO.Le09Kt0ni8Wl4NJChqDnvWVKDwptCq');

COMMIT;
