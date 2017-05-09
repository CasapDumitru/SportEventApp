using SportEventApp.Business.DTOModels;
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
    [RoutePrefix("api/friendship")]

    public class FriendshipController : ApiController
    {
        // GET api/<controller>
        [HttpGet]
        [Route("GetFriends/{userId}")]
        public IHttpActionResult Get(int userId)
        {
            var friendshipService = new FriendshipService();

            return Ok(friendshipService.GetAllFriendships(userId));
        }

        // POST api/<controller>
        public IHttpActionResult Post(FriendshipDTO friendship)
        {
                var friendshipService = new FriendshipService();
                FriendshipDTO friendshipDTO = friendshipService.AddFriendship(friendship);

                if (friendshipDTO == null)
                    return NotFound();

                return Ok(friendshipDTO);
        }


        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            var friendshipService = new FriendshipService();
            FriendshipDTO friendshipDTO = friendshipService.RemoveFriendship(id);
            if (friendshipDTO == null)
                return BadRequest("This account does not exist in DB");
            return Ok(friendshipDTO);
        }
    }
}