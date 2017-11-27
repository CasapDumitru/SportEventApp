using System;

namespace SportEventApp.Data.Models
{
    public class Friendship :BaseModel
    {
        public int UserOneId { get; set; }
        public virtual Account UserOne { get; set; }
        public int UserTwoId { get; set; }
        public virtual Account UserTwo { get; set; }
        public DateTime Since { get; set; }

    }
}
