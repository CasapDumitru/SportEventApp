using evOlympics.Data.Models;
using System.Data.Entity.ModelConfiguration;

namespace evOlympics.Data.Mappings
{
    internal class AccountMap : EntityTypeConfiguration<Account>
    {
        public AccountMap()
        {
            ToTable("Accounts");
            HasKey(m => m.Id);
            Property(m => m.FirstName);
            Property(m => m.LastName);
            Property(m => m.Email);
            Property(m => m.UserName);
            Property(m => m.UserPassword);
            Property(m => m.UserRole);
            Property(m => m.AdressId);
            HasRequired(m => m.Adress).WithMany().HasForeignKey(m => m.AdressId);
            HasMany(m => m.Interests).WithMany().Map(m => m.MapLeftKey("AccountId").MapRightKey("SportId").ToTable("Accounts_Sports"));
        }
    }
}
