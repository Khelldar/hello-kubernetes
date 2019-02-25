CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE todos (
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    date_created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT(now() at time zone 'utc'),
    text VARCHAR (200) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    date_completed TIMESTAMP WITH TIME ZONE
);