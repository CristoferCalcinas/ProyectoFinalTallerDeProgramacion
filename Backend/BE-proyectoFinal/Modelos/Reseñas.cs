using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Reseñas
    {
        [Key]
        public int reseña_id { get; set; }
        public string? comentario { get; set; }
        public int calificacion { get; set; }
        public int usuario_id { get; set; }
        public int vendedor_id {  get; set; }
        public int vehiculo_id { get; set; }        
    }
}
