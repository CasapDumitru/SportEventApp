using System;

namespace SportEventApp.Data.Models
{
    public class Message : BaseModel
    {
        public string Text { get; set; }
        public int UserId { get; set; }
        public Account User { get; set; }
        public DateTime Date { get; set; }
        public int ConversationId { get; set; }
        public Conversation Conversation { get; set; }

    }
}
