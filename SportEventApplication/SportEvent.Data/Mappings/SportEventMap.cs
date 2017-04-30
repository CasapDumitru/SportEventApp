using evOlympics.Data.Models;
using System.Data.Entity.ModelConfiguration;

namespace evOlympics.Data.Mappings
{
    internal class SportEventMap : EntityTypeConfiguration<SportEvent>
    {
        public SportEventMap()
        {
            ToTable("SportEvents");
            HasKey(m => m.Id);
            Property(m => m.Title);
            Property(m => m.Date);
            Property(m => m.Description);
            Property(m => m.CategoryId);
            Property(m => m.OwnerId);
            Property(m => m.ImagePath);
            HasRequired(m => m.Category).WithMany(m => m.SportEvents).HasForeignKey(m => m.CategoryId);
            HasRequired(m => m.Owner).WithMany(m => m.OrganizedSportEvents).HasForeignKey(m => m.OwnerId);
            HasRequired(m => m.Adress).WithMany().HasForeignKey(m => m.AdressId);
            HasMany(m => m.Attendees).WithMany(m => m.ParticipatedSportEvents).Map(m => m.MapLeftKey("SportEventId").MapRightKey("AttendeeId").ToTable("SportEvents_Accounts"));
        }

    }
}
