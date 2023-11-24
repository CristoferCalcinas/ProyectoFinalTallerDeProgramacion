using BE_proyectoFinal.Modelos;
using Microsoft.AspNetCore.Mvc;
using WebApplication3.Contexto;

namespace WebApplication3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VehiculosController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly AplicacionContexto _aplicacionContexto;
        
        public VehiculosController(ILogger<VehiculosController> logger, AplicacionContexto aplicacionContexto)
        {
            _logger = logger;
            _aplicacionContexto = aplicacionContexto;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Vehiculos> GET()
        {
            return _aplicacionContexto.vehiculos.ToList();
        }

        [HttpPost]
        [Route("")]
        public IActionResult POST([FromBody] Vehiculos newVehiculos)
        {
            _aplicacionContexto.anuncio.Add(newVehiculos);
            _aplicacionContexto.SaveChanges();
            return Ok(newVehiculos);
        }

        [HttpPut]
        [Route("")]
        public IActionResult PUT([FromBody] Vehiculos vehiculosUpdate)
        {
            _aplicacionContexto.vehiculos.Update(vehiculosUpdate);
            _aplicacionContexto.SaveChanges();
            return Ok(vehiculosUpdate);
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DELETE(int idVehiculosDelete)
        {
            _aplicacionContexto.vehiculos.Remove(_aplicacionContexto.vehiculos.ToList().Where(x=>x.vehiculo_id == idVehiculosDelete).FirstOrDefault());
            _aplicacionContexto.SaveChanges();
            return Ok(idVehiculosDelete);
        }
    }
}
