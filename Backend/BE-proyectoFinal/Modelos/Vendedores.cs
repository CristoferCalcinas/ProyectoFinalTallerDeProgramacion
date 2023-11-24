using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Vendedores
    {
        [Key]
        public int vendedor_id { get; set; }
        public int usuario_id {  get; set; }
        public int reputacion { get; set; }
        public int productos_vendidos { get; set; }
        public double ventas_totales { get; set; }
    }
}
