using Microsoft.EntityFrameworkCore;
using WebApplication3.Modelo;

namespace WebApplication3.Contexto
{
    public class AplicacionContexto : DbContext
    {
        public AplicacionContexto(DbContextOptions<AplicacionContexto> options):base(options) { }
        public DbSet<articulos_blog> articulos_blog { get; set; }
    }
}
