using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class ConversationDTO
    {
        public int Id { get; set; }
        public AccountDTO UserOne { get; set; }
        public AccountDTO UserTwo { get; set; }
        public virtual ICollection<MessageDTO> Messages { get; set; }
    }
}