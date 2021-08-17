BEGIN;

CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" INT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "user_status" TEXT NOT NULL ,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "phone" TEXT ,
    "city" TEXT,
    "links" TEXT,
    "expérience" TEXT
);

CREATE TABLE "project" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "project_status" BOOLEAN NOT NULL,
    "project_description" TEXT,
    "need_of_the_project" TEXT,
    "beginning_date" DATE,
    "icon"TEXT
);


CREATE TABLE "skill" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL
);


CREATE TABLE "role" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL
);

COMMIT ;