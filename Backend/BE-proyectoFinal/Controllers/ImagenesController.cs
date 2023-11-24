using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ImagenesController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public ImagenesController(ILogger<ImagenesController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Imagenes> GET()
        {
            return _aplicacionContexto.imagenes.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Imagenes newImagenes)
        {
            _aplicacionContexto.imagenes.Add(newImagenes);
            _aplicacionContexto.SaveChanges();
            return Ok(newImagenes);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Imagenes imagenesUpdate)
        {
            _aplicacionContexto.imagenes.Update(imagenesUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(imagenesUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idImagenesDelete)
        {
            _aplicacionContexto.imagenes.Remove(_aplicacionContexto.imagenes.ToList().Where(x=>x.imagen_id == idImagenesDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idImagenesDelete);
        }
    }
}
