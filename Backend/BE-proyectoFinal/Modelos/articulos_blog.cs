using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Articulos_Blog
    {
        [Key]
        public int articulo_id { get; set; }
        public string? titulo { get; set; }
        public string? contenido { get; set; }
        public DateTime? fecha_publicacion { get; set; }
    }
}
