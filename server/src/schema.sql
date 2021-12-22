CREATE TABLE users (
	"userId" uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    "username" varchar UNIQUE NOT NULL,
    "email" varchar(100) UNIQUE NOT NULL,
    "password" varchar(255) NOT NULL,
    "gender" char NOT NULL,
    "dateOfBirth" date NOT NULL
);

create index idx_users_username ON users(username);


CREATE TABLE posts (
    "postId" varchar UNIQUE NOT NULL,
    "type" smallint NOT NULL,
    "description" varchar NOT NULL,
    "active" bool NOT NULL DEFAULT true,
    "date" timestamp NOT NULL DEFAULT current_timestamp
);


-- Update date trigger
CREATE OR REPLACE FUNCTION update_date()
RETURNS TRIGGER AS $$
BEGIN
    new."date" = current_timestamp;
    RETURN new;
END
$$
language plpgsql;

CREATE TRIGGER "UpdateDateTrigger"
BEFORE INSERT OR UPDATE ON posts
FOR EACH ROW EXECUTE PROCEDURE update_date();


INSERT INTO posts ("postId", "type", "description", "active") VALUES (1, 1, 'start post', 'true')


select * from posts


