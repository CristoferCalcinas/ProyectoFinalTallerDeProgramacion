using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Imagenes
    {
        [Key]
        public int imagen_id { get; set; }
        public string? url { get; set; }
        public int anuncio_id { get; set; }       
    }
}
