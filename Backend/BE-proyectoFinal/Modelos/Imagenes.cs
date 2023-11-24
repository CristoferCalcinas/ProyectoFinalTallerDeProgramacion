using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Anuncio
    {
        [Key]
        public int imagen_id { get; set; }
        public string? url { get; set; }
        public int anuncio_id { get; set; }       
    }
}
