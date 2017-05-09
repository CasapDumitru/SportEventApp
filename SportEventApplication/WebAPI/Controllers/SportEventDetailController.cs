using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/sporteventdetail")]
    public class SportEventDetailController : ApiController
    {
        [Route("Get/{sportEvId:int}/{userId:int}")]
        public IHttpActionResult Get(int sportEvId, int userId)
        {

            SportEventDetailService sportEventDetailService = new SportEventDetailService();

            return Ok(sportEventDetailService.GetSportEvent(sportEvId,userId));
        }

        public IHttpActionResult Put(SportEventDetailDTO spEventVM)
        {
            var sportEventDetailService = new SportEventDetailService();

            SportEventDetailDTO sportEventVM = sportEventDetailService.editSportEvent(spEventVM);

            if (sportEventVM == null)
                return NotFound();

            return Ok(sportEventVM);
        }
    }

  
}
