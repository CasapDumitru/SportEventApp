using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Data.Models
{
    public class Friendship :BaseModel
    {
        public virtual int UserOneId { get; set; }
        public virtual Account UserOne { get; set; }
        public virtual int UserTwoId { get; set; }
        public virtual Account UserTwo { get; set; }
        public DateTime Since { get; set; }

    }
}
