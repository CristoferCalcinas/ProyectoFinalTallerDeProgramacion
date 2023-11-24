using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReseñasController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public ReseñasController(ILogger<ReseñasController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Reseñas> GET()
        {
            return _aplicacionContexto.reseñas.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Reseñas newReseñas)
        {
            _aplicacionContexto.reseñas.Add(newReseñas);
            _aplicacionContexto.SaveChanges();
            return Ok(newReseñas);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Reseñas reseñasUpdate)
        {
            _aplicacionContexto.reseñas.Update(reseñasUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(reseñasUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idReseñasDelete)
        {
            _aplicacionContexto.reseñas.Remove(_aplicacionContexto.reseñas.ToList().Where(x=>x.reseña_id == idReseñasDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idReseñasDelete);
        }
    }
}
