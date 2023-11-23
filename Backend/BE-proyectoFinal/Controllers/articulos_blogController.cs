using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class Articulos_BlogController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public Articulos_BlogController(ILogger<Articulos_BlogController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Articulos_Blog> GET()
        {
            return _aplicacionContexto.articulos_blog.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Articulos_Blog newarticulos_blog)
        {
            _aplicacionContexto.articulos_blog.Add(newarticulos_blog);
            _aplicacionContexto.SaveChanges();
            return Ok(newarticulos_blog);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Articulos_Blog articulos_blogUpdate)
        {
            _aplicacionContexto.articulos_blog.Update(articulos_blogUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(articulos_blogUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idarticulos_blogDelete)
        {
            _aplicacionContexto.articulos_blog.Remove(_aplicacionContexto.articulos_blog.ToList().Where(x=>x.articulo_id == idarticulos_blogDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idarticulos_blogDelete);
        }
    }
}
