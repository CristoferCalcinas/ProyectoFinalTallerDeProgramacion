using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;
using WebApplication3.Modelo;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FavoritosController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public FavoritosController(ILogger<FavoritosController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Favoritos> GET()
        {
            return _aplicacionContexto.favoritos.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Favoritos newFavoritos)
        {
            _aplicacionContexto.favoritos.Add(newFavoritos);
            _aplicacionContexto.SaveChanges();
            return Ok(newFavoritos);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Favoritos favoritosUpdate)
        {
            _aplicacionContexto.favoritos.Update(favoritosUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(favoritosUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idFavoritosDelete)
        {
            _aplicacionContexto.favoritos.Remove(_aplicacionContexto.favoritos.ToList().Where(x=>x.usuario_id == idFavoritosDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idFavoritosDelete);
        }
    }
}
