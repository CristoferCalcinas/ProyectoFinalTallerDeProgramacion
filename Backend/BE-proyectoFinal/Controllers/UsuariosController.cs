using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public UsuariosController(ILogger<UsuariosController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Usuarios> GET()
        {
            return _aplicacionContexto.usuarios.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Usuarios newUsuarios)
        {
            _aplicacionContexto.usuarios.Add(newUsuarios);
            _aplicacionContexto.SaveChanges();
            return Ok(newUsuarios);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Usuarios usuariosUpdate)
        {
            _aplicacionContexto.usuarios.Update(usuariosUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(usuariosUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idUsuariosDelete)
        {
            _aplicacionContexto.usuarios.Remove(_aplicacionContexto.usuarios.ToList().Where(x=>x.usuario_id == idUsuarioDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idUsuariosDelete);
        }
    }
}
