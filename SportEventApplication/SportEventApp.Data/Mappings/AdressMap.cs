using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration;
using SportEventApp.Data.Models;

namespace SportEventApp.Data.Mappings
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
