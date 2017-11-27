using System.Collections.Generic;

namespace SportEventApp.Data.Models
{
    public class Conversation: BaseModel
    {
        public int UserOneId { get; set; }
        public virtual Account UserOne { get; set; }
        public int UserTwoId { get; set; }
        public virtual Account UserTwo { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
    }
}
