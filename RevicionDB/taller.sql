BEGIN;

CREATE TABLE IF NOT EXISTS public.usuarios
(
    usuario_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    correo VARCHAR(255) UNIQUE,
    contraseña VARCHAR(255),
    rol CHARACTER VARYING(20) COLLATE pg_catalog."default"
);

CREATE TABLE IF NOT EXISTS public.vehiculos
(
    vehiculo_id SERIAL PRIMARY KEY,
    marca VARCHAR(50) COLLATE pg_catalog."default",
    modelo VARCHAR(50) COLLATE pg_catalog."default",
    precio NUMERIC(12, 2),
    ubicacion VARCHAR(100) COLLATE pg_catalog."default",
    vendedor_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.anuncios
(
    anuncio_id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) COLLATE pg_catalog."default",
    descripcion TEXT COLLATE pg_catalog."default",
    fecha_publicacion TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    vehiculo_id INTEGER REFERENCES public.vehiculos(vehiculo_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    vendedor_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.favoritos
(
    usuario_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    anuncio_id INTEGER REFERENCES public.anuncios(anuncio_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    PRIMARY KEY (usuario_id, anuncio_id)
);

CREATE TABLE IF NOT EXISTS public.imagenes
(
    imagen_id SERIAL PRIMARY KEY,
    url VARCHAR(255) COLLATE pg_catalog."default",
    anuncio_id INTEGER REFERENCES public.anuncios(anuncio_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public."reseñas"
(
    "reseña_id" SERIAL PRIMARY KEY,
    comentario TEXT COLLATE pg_catalog."default",
    calificacion INTEGER,
    usuario_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    vendedor_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    vehiculo_id INTEGER REFERENCES public.vehiculos(vehiculo_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Agregando lo que son las tablas de administradores, vendedores y compradores
-- todos se relacionan con usuario
CREATE TABLE IF NOT EXISTS public.administradores
(
    administrador_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.vendedores
(
    vendedor_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.compradores
(
    comprador_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

END;