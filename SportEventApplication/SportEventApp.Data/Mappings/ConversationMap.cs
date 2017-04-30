using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration;
using SportEventApp.Data.Models;

namespace SportEventApp.Data.Mappings
{
    internal class ConversationMap : EntityTypeConfiguration<Conversation>
    {
        public ConversationMap()
        {
            ToTable("Conversations");
            HasKey(m => m.Id);
            Property(m => m.UserOneId);
            Property(m => m.UserTwoId);
            HasRequired(m => m.UserOne).WithMany().HasForeignKey(m => m.UserOneId);
            HasRequired(m => m.UserTwo).WithMany().HasForeignKey(m => m.UserTwoId);
        }
    }
}
