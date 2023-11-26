using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Compradores
    {
        [Key]
        public int comprador_id { get; set; }
        public int usuario_id {  get; set; }
        public int compras_realizadas { get; set; }
        public double gasto_total { get; set; }
    }
}
