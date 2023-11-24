using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AnuncioController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public AnuncioController(ILogger<AnuncioController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Anuncio> GET()
        {
            return _aplicacionContexto.anuncio.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Anuncio newAnuncio)
        {
            _aplicacionContexto.anuncio.Add(newAnuncio);
            _aplicacionContexto.SaveChanges();
            return Ok(newAnuncio);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Anuncio anuncioUpdate)
        {
            _aplicacionContexto.anuncio.Update(anuncioUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(anuncioUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idAnuncioDelete)
        {
            _aplicacionContexto.anuncio.Remove(_aplicacionContexto.anuncio.ToList().Where(x=>x.anuncio_id == idAnuncioDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idAnuncioDelete);
        }
    }
}
