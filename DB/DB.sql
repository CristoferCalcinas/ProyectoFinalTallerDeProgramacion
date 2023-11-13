BEGIN;


CREATE TABLE IF NOT EXISTS public.anuncios
(
    anuncio_id integer NOT NULL DEFAULT nextval('anuncios_anuncio_id_seq'::regclass),
    titulo character varying(100) COLLATE pg_catalog."default",
    descripcion text COLLATE pg_catalog."default",
    fecha_publicacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    vehiculo_id integer,
    vendedor_id integer,
    CONSTRAINT anuncios_pkey PRIMARY KEY (anuncio_id)
);

CREATE TABLE IF NOT EXISTS public.articulos_blog
(
    articulo_id integer NOT NULL DEFAULT nextval('articulos_blog_articulo_id_seq'::regclass),
    titulo character varying(255) COLLATE pg_catalog."default",
    contenido text COLLATE pg_catalog."default",
    fecha_publicacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT articulos_blog_pkey PRIMARY KEY (articulo_id)
);

CREATE TABLE IF NOT EXISTS public.favoritos
(
    usuario_id integer NOT NULL,
    anuncio_id integer NOT NULL,
    CONSTRAINT favoritos_pkey PRIMARY KEY (usuario_id, anuncio_id)
);

CREATE TABLE IF NOT EXISTS public.imagenes
(
    imagen_id integer NOT NULL DEFAULT nextval('imagenes_imagen_id_seq'::regclass),
    url character varying(255) COLLATE pg_catalog."default",
    anuncio_id integer,
    CONSTRAINT imagenes_pkey PRIMARY KEY (imagen_id)
);

CREATE TABLE IF NOT EXISTS public."reseñas"
(
    "reseña_id" integer NOT NULL DEFAULT nextval('"reseñas_reseña_id_seq"'::regclass),
    comentario text COLLATE pg_catalog."default",
    calificacion integer,
    usuario_id integer,
    vendedor_id integer,
    vehiculo_id integer,
    CONSTRAINT "reseñas_pkey" PRIMARY KEY ("reseña_id")
);

CREATE TABLE IF NOT EXISTS public.usuarios
(
    usuario_id integer NOT NULL DEFAULT nextval('usuarios_usuario_id_seq'::regclass),
    nombre character varying(255) COLLATE pg_catalog."default",
    correo character varying(255) COLLATE pg_catalog."default",
    "contraseña" character varying(255) COLLATE pg_catalog."default",
    rol character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT usuarios_pkey PRIMARY KEY (usuario_id),
    CONSTRAINT usuarios_correo_key UNIQUE (correo)
);

CREATE TABLE IF NOT EXISTS public.vehiculos
(
    vehiculo_id integer NOT NULL DEFAULT nextval('vehiculos_vehiculo_id_seq'::regclass),
    marca character varying(50) COLLATE pg_catalog."default",
    modelo character varying(50) COLLATE pg_catalog."default",
    amo integer,
    precio numeric(12, 2),
    ubicacion character varying(100) COLLATE pg_catalog."default",
    vendedor_id integer,
    CONSTRAINT vehiculos_pkey PRIMARY KEY (vehiculo_id)
);

CREATE TABLE IF NOT EXISTS public.administradores
(
    administrador_id SERIAL PRIMARY KEY,
    usuario_id integer REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    fecha_inicio date,
    fecha_fin date, 
);

CREATE TABLE IF NOT EXISTS public.vendedores
(
    vendedor_id SERIAL PRIMARY KEY,
    usuario_id integer REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    reputacion integer,
    productos_vendidos integer,
    ventas_totales numeric(12, 2)
);

CREATE TABLE IF NOT EXISTS public.compradores
(
    comprador_id SERIAL PRIMARY KEY,
    usuario_id integer REFERENCES public.usuarios(usuario_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
    compras_realizadas integer,
    gasto_total numeric(12, 2)
);


ALTER TABLE IF EXISTS public.anuncios
    ADD CONSTRAINT anuncios_vehiculo_id_fkey FOREIGN KEY (vehiculo_id)
    REFERENCES public.vehiculos (vehiculo_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.anuncios
    ADD CONSTRAINT anuncios_vendedor_id_fkey FOREIGN KEY (vendedor_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.favoritos
    ADD CONSTRAINT favoritos_anuncio_id_fkey FOREIGN KEY (anuncio_id)
    REFERENCES public.anuncios (anuncio_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.favoritos
    ADD CONSTRAINT favoritos_usuario_id_fkey FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.imagenes
    ADD CONSTRAINT imagenes_anuncio_id_fkey FOREIGN KEY (anuncio_id)
    REFERENCES public.anuncios (anuncio_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public."reseñas"
    ADD CONSTRAINT "reseñas_usuario_id_fkey" FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public."reseñas"
    ADD CONSTRAINT "reseñas_vehiculo_id_fkey" FOREIGN KEY (vehiculo_id)
    REFERENCES public.vehiculos (vehiculo_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public."reseñas"
    ADD CONSTRAINT "reseñas_vendedor_id_fkey" FOREIGN KEY (vendedor_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.vehiculos
    ADD CONSTRAINT vehiculos_vendedor_id_fkey FOREIGN KEY (vendedor_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.administradores
    ADD CONSTRAINT administradores_usuario_id_fkey FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.vendedores
    ADD CONSTRAINT vendedores_usuario_id_fkey FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.compradores
    ADD CONSTRAINT compradores_usuario_id_fkey FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;