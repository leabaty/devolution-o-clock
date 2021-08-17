-- Revert nom:initialization from pg

BEGIN;

DROP TABLE "user" , "project" , "role", "skill";

COMMIT;
