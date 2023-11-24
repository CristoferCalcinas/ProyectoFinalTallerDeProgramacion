using System.ComponentModel.DataAnnotations;

namespace BE_proyectoFinal.Modelos
{
    public class Usuarios
    {
        [Key]
        public int usuario_id { get; set; }
        public string? nombre { get; set; }
        public string? correo { get; set; }
        public string? contraseña { get; set; }
        public string? rol { get; set; }
    }
