using System;
using System.Collections.Generic;

namespace SportEventApp.Data.Models
{
    public class Account : BaseModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public int AdressId { get; set; }
        public virtual Adress Adress { get; set; }
        public virtual ICollection<Sport> Interests { get; set; }
        public virtual ICollection <SportEvent> ParticipatedSportEvents { get; set; }
        public virtual ICollection<SportEvent> OrganizedSportEvents { get; set; }
        public virtual ICollection<Conversation> Conversations { get; set; }


        public Account()
        {
            Interests = new HashSet<Sport>();
            ParticipatedSportEvents = new HashSet<SportEvent>();
            OrganizedSportEvents = new HashSet<SportEvent>();
            Conversations = new HashSet<Conversation>();
        }

        public override bool Equals(Object obj)
        {
            Account ac = obj as Account;
            if (ac == null)
                return false;
            else
                return ( this.Email.Equals(ac.Email) || this.UserName.Equals(ac.UserName));                 
        }
    }
}
