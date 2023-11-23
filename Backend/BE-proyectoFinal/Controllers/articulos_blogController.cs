using Microsoft.AspNetCore.Mvc;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class articulos_blogController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public articulos_blogController(ILogger<articulos_blogController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<articulos_blog> GET()
        {
            return _aplicacionContexto.articulos_blog.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] articulos_blog newarticulos_blog)
        {
            _aplicacionContexto.articulos_blog.Add(newarticulos_blog);
            _aplicacionContexto.SaveChanges();
            return Ok(newarticulos_blog);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] articulos_blog articulos_blogUpdate)
        {
            _aplicacionContexto.docente.Update(articulos_blogUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(articulos_blogUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idarticulos_blogDelete)
        {
            _aplicacionContexto.articulos_blog.Remove(_aplicacionContexto.articulos_blog.ToList().Where(x=>x.idarticulos_blog == idarticulos_blogDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idarticulos_blogDelete);
        }
    }
}
