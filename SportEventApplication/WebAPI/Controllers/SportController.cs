using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SportController : ApiController
    {

         public IHttpActionResult Get(int id)
        {
            var sportService = new SportService();

            SportDTO account = sportService.getSportById(id);
            if (account == null)
                return NotFound();

            return Ok(account);
        }

        public IHttpActionResult Post(SportDTO sportVM)
        {
       
                var sportService = new SportService();
                SportDTO svm = sportService.addSport(sportVM);
                if (svm == null)
                    return BadRequest("This sport already exist in DB");

                return Ok(svm);

        }

        public IHttpActionResult Delete(int id)
        {
            var sportService = new SportService();
            SportDTO svm = sportService.deleteSport(id);
            if (svm == null)
                return BadRequest("This sport does not exist in DB");
            return Ok(svm);
        }

        public IHttpActionResult Get()
        {
            var sportService = new SportService();

            var sports = sportService.getAllSports();
            if (sports == null)
                return NotFound();

            return Ok(sports);
        }
    }
}
