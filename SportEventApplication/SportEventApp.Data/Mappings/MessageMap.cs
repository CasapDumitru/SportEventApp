﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration;
using SportEventApp.Data.Models;

namespace SportEventApp.Data.Mappings
{
    internal class MessageMap : EntityTypeConfiguration<Message>
    {
        public MessageMap()
        {
            ToTable("Messages");
            HasKey(m => m.Id);
            Property(m => m.ConversationId);
            Property(m => m.Text);
            Property(m => m.Date);
            HasRequired(m => m.User).WithMany().HasForeignKey(m => m.UserId);
            HasRequired(m => m.Conversation).WithMany(m => m.Messages).HasForeignKey(m => m.ConversationId);
        }
    }
}
