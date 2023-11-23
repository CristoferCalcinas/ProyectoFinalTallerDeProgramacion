using BE_proyectoFinal.Modelos;
using Microsoft.EntityFrameworkCore;

namespace WebApplication3.Contexto
{
    public class AplicacionContexto : DbContext
    {
        public AplicacionContexto(DbContextOptions<AplicacionContexto> options):base(options) { }
        public DbSet<Anuncio> anuncio { get; set; }
        public DbSet<Articulos_Blog> articulos_blog { get; set; }
    }
}
