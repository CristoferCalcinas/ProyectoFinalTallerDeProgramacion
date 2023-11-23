using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace WebApplication3.Modelo
{
    public class Docente
    {
        [Key]
        public int anuncio_id { get; set; }
        public string? titulo { get; set; }
        public string? descripcion { get; set; }
        public DateTime fecha_publicacion { get; set; }
        public int vehiculo_id {  get; set; }
        public int vendedor_id { get; set; }
        
    }
}
