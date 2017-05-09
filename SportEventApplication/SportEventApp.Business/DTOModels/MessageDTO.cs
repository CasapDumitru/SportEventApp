using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class MessageDTO
    {
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }
        public AccountSimpleDTO User { get; set; }
        public DateTime Date { get; set; }
        public ConversationDTO Conversation { get; set; }
    }
}