using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdministradoresController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public AdministradoresController(ILogger<AdministradoresController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Administradores> GET()
        {
            return _aplicacionContexto.administradores.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Administradores newAdministradores)
        {
            _aplicacionContexto.administradores.Add(newAdministradores);
            _aplicacionContexto.SaveChanges();
            return Ok(newAdministradores);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Administradores administradoresUpdate)
        {
            _aplicacionContexto.administradores.Update(administradoresUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(administradoresUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idAdministradoresDelete)
        {
            _aplicacionContexto.administradores.Remove(_aplicacionContexto.administradores.ToList().Where(x=>x.administrador_id == idAdministradoresDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idAdministradoresDelete);
        }
    }
}
