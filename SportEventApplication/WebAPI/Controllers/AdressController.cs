using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class AdressController : ApiController
    {

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var adressService = new AdressService();

            AdressDTO adressVM = adressService.getAdressById(id);
            if (adressVM == null)
                return NotFound();

            return Ok(adressVM);
        }

        // POST api/<controller>
        public IHttpActionResult Post(AdressDTO adress)
        {
            AdressService adressService = new AdressService();
            AdressDTO avm = adressService.addAdress(adress);

            if (avm == null)
                return BadRequest("This adress already exist in DB");

            return Ok(avm);
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            var adressService = new AdressService();
            AdressDTO avm = adressService.deleteAdress(id);
            if (avm == null)
                return BadRequest("This adress does not exist in DB");
            return Ok(avm);
        }
    }
}
