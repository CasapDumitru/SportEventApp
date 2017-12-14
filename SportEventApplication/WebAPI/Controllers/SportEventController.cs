using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/sportevent")]
    public class SportEventController : ApiController
    {

        public IHttpActionResult Get()
        {
            var sportEventService = new SportEventService();

            var sportsEvents = sportEventService.getAllEvents();


            var root = AppDomain.CurrentDomain.SetupInformation.ApplicationBase;

            foreach (SportEventDTO spEv in sportsEvents)
            {
                var path = Path.Combine(root, "Images/" + spEv.ImagePath);

                var bytes = File.ReadAllBytes(path);

                var base64 = Convert.ToBase64String(bytes);
                spEv.ImageBase64 = "data:image/" + spEv.ImagePath.Split('.')[1] + ";base64," + base64;
            }

      
            if (sportsEvents == null)
                return NotFound();

            return Ok(sportsEvents);
        }

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


        public IHttpActionResult Post(SportEventDTO sportevent)
        {
  
            var sportEventService = new SportEventService();
            SportEventDTO sporteventVM = sportEventService.addSportEvent(sportevent);

            if (sportevent == null)
                return NotFound();

            return Ok(sportevent);
                    

        }

        public IHttpActionResult Delete(int id)
        {
            var sportEventService = new SportEventService();
            bool svm = sportEventService.deleteSportEvent(id);
            if (svm == null)
                return BadRequest("This sportevent does not exist in DB");
            return Ok(svm);
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

            var sportEvents = sportEventService.GetInterestedByPage(pageSize, pageNumber, userId);

            var root = AppDomain.CurrentDomain.SetupInformation.ApplicationBase;

            foreach(SportEventDTO spEv in sportEvents)
            {
                var path = Path.Combine(root, "Images/" + spEv.ImagePath);

                var bytes = File.ReadAllBytes(path);
               
                var base64 = Convert.ToBase64String(bytes);
                spEv.ImageBase64 = "data:image/" + spEv.ImagePath.Split('.')[1] + ";base64," + base64;
            }         

            return Ok(sportEvents);
        }

        [Route("GetCreatedByPage/{pageSize:int}/{pageNumber:int}/{userId:int}")]
        public IHttpActionResult GetCreatedByPage(int pageSize, int pageNumber, int userId)
        {

            SportEventService sportEventService = new SportEventService();


            var sportEvents = sportEventService.GetCreatedByPage(pageSize, pageNumber, userId);

            var root = AppDomain.CurrentDomain.SetupInformation.ApplicationBase;

            foreach (SportEventDTO spEv in sportEvents)
            {
                var path = Path.Combine(root, "Images/" + spEv.ImagePath);

                var bytes = File.ReadAllBytes(path);

                var base64 = Convert.ToBase64String(bytes);
                spEv.ImageBase64 = "data:image/" + spEv.ImagePath.Split('.')[1] + ";base64," + base64;
            }

            return Ok(sportEvents);
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

            var sportEvents = sportEventService.GetNearByPage(pageSize, pageNumber, lat, lng);

            var root = AppDomain.CurrentDomain.SetupInformation.ApplicationBase;

            foreach (SportEventDTO spEv in sportEvents)
            {
                var path = Path.Combine(root, "Images/" + spEv.ImagePath);

                var bytes = File.ReadAllBytes(path);

                var base64 = Convert.ToBase64String(bytes);
                spEv.ImageBase64 = "data:image/" + spEv.ImagePath.Split('.')[1] + ";base64," + base64;
            }

            return Ok(sportEvents);
        }
    }
}
