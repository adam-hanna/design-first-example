-- +migrate Up
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.users
(
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  username text COLLATE pg_catalog."default" NOT NULL,
  password text COLLATE pg_catalog."default" NOT NULL,
  is_admin boolean NOT NULL,
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_username_key UNIQUE (username)
)
WITH (
  OIDS = FALSE
);

CREATE UNIQUE INDEX IF NOT EXISTS users_username_idx
ON public.users USING btree
(username COLLATE pg_catalog."default")
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public.todos
(
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  "timestamp" timestamp with time zone NOT NULL DEFAULT now(),
  note text COLLATE pg_catalog."default",
  CONSTRAINT todos_pkey PRIMARY KEY (id),
  CONSTRAINT user_id FOREIGN KEY (user_id)
  REFERENCES public.users (id) MATCH SIMPLE
  ON UPDATE NO ACTION
  ON DELETE NO ACTION
)
WITH (
  OIDS = FALSE
);

CREATE UNIQUE INDEX IF NOT EXISTS todos_user_timestamp_idx
ON public.todos USING btree
(user_id, "timestamp")
TABLESPACE pg_default;

-- +migrate Down
-- DROP INDEX IF EXISTS public.users_username_idx CASCADE;
-- DROP INDEX IF EXISTS public.todos_user_timestamp_idx CASCADE;
-- DROP TABLE IF EXISTS public.todos CASCADE;
-- DROP TABLE IF EXISTS public.users CASCADE;
-- DROP EXTENSION IF EXISTS "uuid-ossp";
-- DROP EXTENSION IF EXISTS "pgcrypto";
