
using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            var accountService = new AccountService();

           var accounts = accountService.getAllAccounts();
            if (accounts == null)
                return NotFound();

            return Ok(accounts);
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var accountService = new AccountService();

            AccountDTO accountVM = accountService.getAccountById(id);

            if (accountVM == null)
                return NotFound();

            return Ok(accountVM);
        }

        // POST api/<controller>
        public IHttpActionResult Post(AccountDTO account)
        {
            if (ModelState.IsValid)
            {
                var accountService = new AccountService();
                AccountDTO accountVM = accountService.addAccount(account);

                if (accountVM == null)
                    return NotFound();

                return Ok(accountVM);
            }
            else
            {
                return BadRequest("The model is not valid");
            }
               
        }
        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            var accountService = new AccountService();
            AccountDTO accountVM = accountService.deleteAccount(id);
            if (accountVM == null)
                return BadRequest("This account does not exist in DB");
            return Ok(accountVM);
        }

        [HttpGet]
        [Route("login/{username}/{password}")]
        public IHttpActionResult Login(string username, string password)
        {

            var accountService = new AccountService();
            var accountVM = accountService.Login(username, password);
            if (accountVM == null)
                return BadRequest("This account does not exist in DB");
            return Ok(accountVM);
        }

        [HttpGet]
        [Route("GetSportInterest/{userId}")]
        public IHttpActionResult GetSportInterest(int userId)
        {

            var accountService = new AccountService();
            var sports = accountService.getSportInterest(userId);
            if (sports == null)
                return NotFound();

            return Ok(sports);

        }

        [HttpGet]
        [Route("GetMySportInterest/{userId}")]
        public IHttpActionResult GetMySportInterest(int userId)
        {

            var accountService = new AccountService();
            var sports = accountService.getMySportInterest(userId);
            if (sports == null)
                return NotFound();

            return Ok(sports);

        }

        [HttpPost]
        [Route("AddInterest")]
        public IHttpActionResult AddInterest(ManyToMany m)
        {

            var accountService = new AccountService();
            var sports = accountService.AddInterest(m.id1, m.id2);
            if (sports == null)
                return NotFound();

            return Ok(sports);

        }

        [HttpGet]
        [Route("DeleteInterest/{userId}/{sportId}")]
        public IHttpActionResult DeleteInterest(int userId, int sportId)
        {

            var accountService = new AccountService();
            var sports = accountService.DeleteInterest(userId, sportId);
            if (sports == null)
                return NotFound();

            return Ok(sports);

        }

        [HttpGet]
        [Route("GetCreatedSportEvents/{pageSize:int}/{pageNumber:int}/{id:int}")]
        public IHttpActionResult GetCreatedSportEvents(int pageSize,int pageNumber,int id)
        {

            var accountService = new AccountService();
            var sportEvents = accountService.GetCreatedSportEvents(pageSize,pageNumber,id);
            if (sportEvents == null)
                return NotFound();

            return Ok(sportEvents);

        }

        [HttpGet]
        [Route("GetGoingSportEvents/{pageSize:int}/{pageNumber:int}/{id:int}")]
        public IHttpActionResult GetGoingSportEvents(int pageSize, int pageNumber, int id)
        {

            var accountService = new AccountService();
            var sportEvents = accountService.GetGoingSportEvents(pageSize, pageNumber, id);
           
            if (sportEvents == null)
                return NotFound();

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