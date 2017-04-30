using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SportEventApp.Data.Mappings 
{
    internal class FriendshipMap: EntityTypeConfiguration<Friendship>
    {
        public FriendshipMap()
        {
            ToTable("Friendhsip");
            HasKey(m => m.Id);
            Property(m => m.UserOneId);
            Property(m => m.UserTwoId);
            Property(m => m.Since);
            HasRequired(m => m.UserOne).WithMany().HasForeignKey(m => m.UserOneId);
            HasRequired(m => m.UserTwo).WithMany().HasForeignKey(m => m.UserTwoId);
        }          
    }
}
