using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Anuncio
    {
        [Key]
        public int anuncio_id { get; set; }
        public string? titulo { get; set; }
        public string? descripcion { get; set; }
        public DateTime? fecha_publicacion { get; set; }
        public int vehiculo_id {  get; set; }
        public int vendedor_id { get; set; }        
    }
}
