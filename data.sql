CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contrasena varchar(50) NOT NULL,
    fecha DATE NOT NULL
);