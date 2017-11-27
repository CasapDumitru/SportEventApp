using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Services;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/friendship")]

    public class FriendshipController : ApiController
    {
        [HttpGet]
        [Route("GetFriends/{userId}")]
        public IHttpActionResult Get(int userId)
        {
            var friendshipService = new FriendshipService();

            return Ok(friendshipService.GetAllFriendships(userId));
        }

        public IHttpActionResult Post(FriendshipDTO friendship)
        {
                var friendshipService = new FriendshipService();
                FriendshipDTO friendshipDTO = friendshipService.AddFriendship(friendship);

                if (friendshipDTO == null)
                    return NotFound();

                return Ok(friendshipDTO);
        }

        public IHttpActionResult Delete(int id)
        {
            var friendshipService = new FriendshipService();
            FriendshipDTO friendshipDTO = friendshipService.RemoveFriendship(id);
            if (friendshipDTO == null)
                return BadRequest("This account does not exist in DB");
            return Ok(friendshipDTO);
        }

        [HttpGet]
        [Route("GetFriendDetail/{userId}/{friendId}")]
        public IHttpActionResult GetFriendDetail(int userId,int friendId)
        {
            var friendshipService = new FriendshipService();

            FriendDTO frDTO = friendshipService.GetDetailFriend(userId,friendId);
            if(frDTO == null)
                return BadRequest("This user does not exist");
            return Ok(frDTO);
        }

        [HttpGet]
        [Route("RemoveFriend/{userId}/{friendId}")]
        public IHttpActionResult RemoveFriend(int userId, int friendId)
        {

            var friendshipService = new FriendshipService();
            var sports = friendshipService.DeleteFriend(userId, friendId);
            if (sports == null)
                return NotFound();

            return Ok(sports);

        }

        [HttpGet]
        [Route("AddFriend/{userId}/{friendId}")]
        public IHttpActionResult AddFriend(int userId, int friendId)
        {

            var friendshipService = new FriendshipService();
            var sports = friendshipService.AddFriend(userId, friendId);
            if (sports == null)
                return NotFound();

            return Ok(sports);
        }
    }
}
