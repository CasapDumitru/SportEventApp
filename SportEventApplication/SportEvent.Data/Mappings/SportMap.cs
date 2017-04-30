using evOlympics.Data.Models;
using System.Data.Entity.ModelConfiguration;

namespace evOlympics.Data.Mappings
{
    internal class SportMap : EntityTypeConfiguration<Sport>
    {
        public SportMap()
        {
            ToTable("Sports");
            HasKey(m => m.Id);
            Property(m => m.Name);
        }

    }
}
