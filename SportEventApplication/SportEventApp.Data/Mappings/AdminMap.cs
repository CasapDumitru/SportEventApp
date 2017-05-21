using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Data.Mappings
{
    internal class AdminMap : EntityTypeConfiguration<Admin>
    {
        public AdminMap()
        {
            ToTable("Admin");
            HasKey(m => m.Id);
            Property(m => m.UserName);
            Property(m => m.Password);
        }
    }
}
