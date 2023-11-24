using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace WebApplication3.Modelo
{
    public class Favoritos
    {
        [Key]
        public int usuario_id { get; set; }
        [Key]
        public int anuncio_id { get; set; }
    }
}
