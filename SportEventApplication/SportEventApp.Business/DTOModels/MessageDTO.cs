using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class MessageDTO
    {
        public int Id { get; set; }
        public virtual string Text { get; set; }
        public virtual AccountDTO User { get; set; }
        public DateTime Date { get; set; }
        public virtual ConversationDTO Conversation { get; set; }
    }
}