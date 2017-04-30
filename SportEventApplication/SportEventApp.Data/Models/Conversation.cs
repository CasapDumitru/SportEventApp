using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Data.Models
{
    public class Conversation: BaseModel
    {
        public virtual int UserOneId { get; set; }
        public virtual Account UserOne { get; set; }
        public virtual int UserTwoId { get; set; }
        public virtual Account UserTwo { get; set; }
        public virtual ICollection<Message> Messages { get; set; }


    }
}
