using BE_proyectoFinal.Modelos;
using Microsoft.EntityFrameworkCore;
using WebApplication3.Modelo;

namespace WebApplication3.Contexto
{
    public class AplicacionContexto : DbContext
    {
        public AplicacionContexto(DbContextOptions<AplicacionContexto> options):base(options) { }
        public DbSet<Anuncio> anuncio { get; set; }
        public DbSet<Articulos_Blog> articulos_blog { get; set; }
        public DbSet<Favoritos> favoritos { get; set; }
        public DbSet<Imagenes> imagenes { get; set; }
        public DbSet<Reseñas> reseñas { get; set; }
        public DbSet<Usuarios> usuarios { get; set; }
        public DbSet<Vehiculos> vehiculos { get; set; }
        public DbSet<Administrador> administradores { get; set; }
        public DbSet<Vendedores> vendedores { get; set; }
        public DbSet<Compradores> compradores { get; set; }
    }
}
