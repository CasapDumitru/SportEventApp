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
    [RoutePrefix("api/messenger")]

    public class MessengerController : ApiController
    {
        // GET api/<controller>
        [HttpGet]
        [Route("GetConversations/{userId}")]
        public IHttpActionResult Get(int userId)
        {
            var messengerService = new MessengerService();

            return Ok(messengerService.getConversationByUserId(userId));
        }

        // POST api/<controller>
        public IHttpActionResult Post(ConversationDTO conversationDTO)
        {
            var messengerService = new MessengerService();
            ConversationDTO convDTO = messengerService.CreateConversation(conversationDTO);

            if (convDTO == null)
                return NotFound();

            return Ok(convDTO);
        }


        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            var messengerService = new MessengerService();
            ConversationDTO convDTO = messengerService.RemoveConversation(id);
            if (convDTO == null)
                return BadRequest("This conversation does not exist in DB");
            return Ok(convDTO);
        }

        [HttpPost]
        [Route("SendMessage")]
        // POST api/<controller>
        public IHttpActionResult PostMessage(MessageDTO messageDTO)
        {
            var messengerService = new MessengerService();
            MessageDTO messDTO = messengerService.addMessage(messageDTO);

            if (messDTO == null)
                return NotFound();

            return Ok(messDTO);
        }

        [HttpDelete]
        [Route("DeleteMessage/{id}")]
        // DELETE api/<controller>/5
        public IHttpActionResult DeleteMessage(int id)
        {
            var messengerService = new MessengerService();
            MessageDTO messDTO = messengerService.deleteMessage(id);
            if (messDTO == null)
                return BadRequest("This conversation does not exist in DB");
            return Ok(messDTO);
        }

        [HttpGet]
        [Route("GetMessages/{pageSize:int}/{pageNumber:int}/{userOneId}/{userSecondId}")]
        public IHttpActionResult GetMessages(int pageSize,int pageNumber,int userOneId,int userSecondId)
        {
            var messengerService = new MessengerService();

            return Ok(messengerService.GetMessages(pageSize,pageNumber,userOneId,userSecondId));
        }

        [HttpGet]
        [Route("GetConversation/{userOneId}/{userSecondId}")]
        public IHttpActionResult GetConversation(int userOneId, int userSecondId)
        {
            var messengerService = new MessengerService();

            return Ok(messengerService.GetOrCreateConversation(userOneId, userSecondId));
        }
    }
}
