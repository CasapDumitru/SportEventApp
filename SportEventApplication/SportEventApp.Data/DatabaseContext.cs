using SportEventApp.Data.Mappings;
using SportEventApp.Data.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace SportEventApp.Data
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Sport> Sports { get; set; }
        public DbSet<SportEvent> SportEvents { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Adress> Adress { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DatabaseContext() : base("SportEventApp.DatabaseContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<NavigationPropertyNameForeignKeyDiscoveryConvention>();

            modelBuilder.Configurations.Add(new AccountMap());
            modelBuilder.Configurations.Add(new SportMap());
            modelBuilder.Configurations.Add(new SportEventMap());
            modelBuilder.Configurations.Add(new AdressMap());
            modelBuilder.Configurations.Add(new MessageMap());
            modelBuilder.Configurations.Add(new ConversationMap());
            modelBuilder.Configurations.Add(new FriendshipMap());
        }
    }
}

