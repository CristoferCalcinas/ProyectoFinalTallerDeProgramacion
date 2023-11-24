using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Vehiculos
    {
        [Key]
        public int vehiculo_id { get; set; }
        public string? marca { get; set; }
        public string? modelo { get; set; }
        public int amo { get; set; }
        public double precio {  get; set; }
        public string? ubicacion { get; set; }
        public int vendedor_id { get; set; }        
    }
}
