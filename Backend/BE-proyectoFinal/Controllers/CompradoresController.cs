using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CompradoresController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public CompradoresController(ILogger<CompradoresController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Compradores> GET()
        {
            return _aplicacionContexto.compradores.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Compradores newCompradores)
        {
            _aplicacionContexto.compradores.Add(newCompradores);
            _aplicacionContexto.SaveChanges();
            return Ok(newCompradores);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Compradores compradoresUpdate)
        {
            _aplicacionContexto.compradores.Update(compradoresUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(compradoresUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idCompradoresDelete)
        {
            _aplicacionContexto.compradores.Remove(_aplicacionContexto.compradores.ToList().Where(x=>x.comprador_id == idCompradoresDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idCompradoresDelete);
        }
    }
}
