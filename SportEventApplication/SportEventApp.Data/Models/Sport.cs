using System;
using System.Collections.Generic;

namespace SportEventApp.Data.Models
{
    public class Sport : BaseModel
    {
        public string Name { get; set; }
        public virtual ICollection<SportEvent> SportEvents { get; set; }

        public Sport()
        {
            SportEvents = new HashSet<SportEvent>();
        }

        public override bool Equals(Object obj)
        {
            Sport sport = obj as Sport;
            if (sport == null)
                return false;
            else
                return (this.Name.Equals(sport.Name));
        }

        public override int GetHashCode()
        {
            unchecked 
            {
                int hash = 17;
                hash = hash * 23 + Name.GetHashCode();
                return hash;
            }
        }
    }
}
