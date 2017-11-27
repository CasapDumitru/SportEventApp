using System;
using System.Collections.Generic;

namespace SportEventApp.Data.Models
{
    public class SportEvent : BaseModel
    {
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public virtual Sport Category { get; set; }
        public int OwnerId { get; set; }
        public virtual Account Owner { get; set; }
        public virtual int AdressId { get; set; }
        public virtual Adress Adress {get;set;}
        public virtual ICollection<Account> Attendees { get; set; }
        public string ImagePath { get; set; }

        public SportEvent()
        {
            Attendees = new HashSet<Account>();
        }  
    }
}
