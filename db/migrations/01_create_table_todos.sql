-- psql -d todo_app -a -f db/migrations/01_create_table_todos.sql

DROP TABLE IF EXISTS todos;
CREATE TABLE todos(
    id SERIAL,
    content VARCHAR(250),
    done BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
