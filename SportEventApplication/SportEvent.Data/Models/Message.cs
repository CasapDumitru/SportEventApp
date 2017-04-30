﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evOlympics.Data.Models
{
    public class Message : BaseModel
    {

        public  string Text { get; set; }
        public  int UserId { get; set; }
        public  Account User { get; set; }
        public DateTime Date { get; set; }
        public int ConversationId { get; set; }
        public Conversation Conversation { get; set; }

    }
}
