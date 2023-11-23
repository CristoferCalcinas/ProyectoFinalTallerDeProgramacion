using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace WebApplication3.Modelo
{
    public class Docente
    {
        [Key]
        public int articulo_id { get; set; }
        public string? titulo { get; set; }
        public string? contenido { get; set; }
        public DateTime? fecha_publicacion { get; set; }
     
    }
}
