using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Data.Models
{
    public class Adress :BaseModel
    {
        public string address { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }

        public override bool Equals(Object obj)
        {
            Adress ad = obj as Adress;
            if (ad == null)
                return false;
            else
                return (this.latitude.Equals(ad.latitude) && this.longitude.Equals(ad.longitude));                  
        }

        
    }
}
