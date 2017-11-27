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
        public AccountSimpleDTO UserOne { get; set; }
        public AccountSimpleDTO UserTwo { get; set; }
        public  ICollection<MessageDTO> Messages { get; set; }
    }
}
