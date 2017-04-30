using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using evOlympics.Data.Models;
using System.Data.Entity.ModelConfiguration;

namespace evOlympics.Data.Mappings
{
    internal class AdressMap : EntityTypeConfiguration<Adress>
    {
        public AdressMap()
        {
            ToTable("Adress");
            HasKey(m=> m.Id);
            Property(m => m.latitude);
            Property(m => m.longitude);
            Property(m => m.address);
        }

    }
}
