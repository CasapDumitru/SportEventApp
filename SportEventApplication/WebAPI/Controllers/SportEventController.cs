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
    [RoutePrefix("api/sportevent")]
    public class SportEventController : ApiController
    {
        // GET api/<controller>
        //[HttpGet]
        public IHttpActionResult Get()
        {
            var sportEventService = new SportEventService();

            var sportsEvents = sportEventService.getAllEvents();
            if (sportsEvents == null)
                return NotFound();

            return Ok(sportsEvents);
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var sportEventService = new SportEventService();

            SportEventDTO sporteventVM = sportEventService.getSportEventBy(id);

            if (sporteventVM == null)
                return NotFound();

            return Ok(sporteventVM);
        }


        [Route("GetByPage/{pageSize:int}/{pageNumber:int}")]
        public IHttpActionResult GetByPage(int pageSize, int pageNumber)
        {

            SportEventService sportEventService = new SportEventService();


            return Ok(sportEventService.GetByPage(pageSize,pageNumber));
        }


        // POST api/<controller>
        public IHttpActionResult Post(SportEventDTO sportevent)
        {
      
              var sportEventService = new SportEventService();
              SportEventDTO sporteventVM = sportEventService.addSportEvent(sportevent);

              if (sportevent == null)
                  return NotFound();

                return Ok(sportevent);

        }


        [HttpGet]
        [Route("GetInterested/{ids}")]
        public IHttpActionResult GetInterested([FromUri] string ids)
        {
            List<int> idList = new List<int>();
            
            string[] arrId = ids.Split(new char[] { ',' });
            for (var i = 0; i < arrId.Length; i++)
            {
                    idList.Add(Int32.Parse(arrId[i])); 
            }

            var sportEventService = new SportEventService();
            var  sportEvents = sportEventService.getSportEventsInterested(idList);

            if (sportEvents == null)
                return NotFound();

            return Ok(sportEvents);
        }

        [Route("GetInterestedByPage/{pageSize:int}/{pageNumber:int}/{userId:int}")]
        public IHttpActionResult GetInterestedByPage(int pageSize, int pageNumber,int userId)
        {

            SportEventService sportEventService = new SportEventService();


            return Ok(sportEventService.GetInterestedByPage(pageSize, pageNumber,userId));
        }

        [Route("GetCreatedByPage/{pageSize:int}/{pageNumber:int}/{userId:int}")]
        public IHttpActionResult GetCreatedByPage(int pageSize, int pageNumber, int userId)
        {

            SportEventService sportEventService = new SportEventService();


            return Ok(sportEventService.GetCreatedByPage(pageSize, pageNumber, userId));
        }

        [HttpGet]
        [Route("Going/{sportEvId:int}/{userId:int}")]
        public IHttpActionResult Going(int sportEvId, int userId)
        {

            SportEventService sportEventService = new SportEventService();


            return Ok(sportEventService.GoingSportEvent(sportEvId, userId));
        }

        [HttpGet]
        [Route("NotGoing/{sportEvId:int}/{userId:int}")]
        public IHttpActionResult NotGoing(int sportEvId, int userId)
        {

            SportEventService sportEventService = new SportEventService();


            return Ok(sportEventService.NotGoingSportEvent(sportEvId, userId));
        }

        [Route("GetNearByPage/{pageSize:int}/{pageNumber:int}/{lat}/{lng}")]
        public IHttpActionResult GetNearByPage(int pageSize, int pageNumber,float lat,float lng)
        {

            SportEventService sportEventService = new SportEventService();

            return Ok(sportEventService.GetNearByPage(pageSize, pageNumber,lat,lng));
        }
    }
}