using SportEventApp.Business.Services;
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
    [RoutePrefix("api/admin")]
    public class AdminController : ApiController
    {

        [HttpGet]
        [Route("login/{username}/{password}")]
        public IHttpActionResult Login(string username, string password)
        {

            var adminService = new AdminService();

            int adminID = adminService.Login(username, password);

            if (adminID == -1)
                return BadRequest("Incorrect username or password");
            return Ok(adminID);
        }
    }
}
