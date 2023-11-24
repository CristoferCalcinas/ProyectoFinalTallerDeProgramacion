using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VendedoresController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public VendedoresController(ILogger<VendedoresController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Vendedores> GET()
        {
            return _aplicacionContexto.vendedores.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Vendedores newVendedores)
        {
            _aplicacionContexto.vendedores.Add(newVendedores);
            _aplicacionContexto.SaveChanges();
            return Ok(newVendedores);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Vendedores vendedoresUpdate)
        {
            _aplicacionContexto.vendedores.Update(vendedoresUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(vendedoresUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idVendedoresDelete)
        {
            _aplicacionContexto.vendedores.Remove(_aplicacionContexto.vendedores.ToList().Where(x=>x.vendedor_id == idVendedoresDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idVendedoresDelete);
        }
    }
}
