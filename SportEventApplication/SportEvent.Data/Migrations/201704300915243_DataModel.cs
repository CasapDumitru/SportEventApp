namespace evOlympics.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DataModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        UserName = c.String(),
                        UserPassword = c.String(),
                        AdressId = c.Int(nullable: false),
                        UserRole = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Adress", t => t.AdressId)
                .Index(t => t.AdressId);
            
            CreateTable(
                "dbo.Adress",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        address = c.String(),
                        latitude = c.Double(nullable: false),
                        longitude = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Conversations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserOneId = c.Int(nullable: false),
                        UserTwoId = c.Int(nullable: false),
                        Account_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accounts", t => t.UserOneId)
                .ForeignKey("dbo.Accounts", t => t.UserTwoId)
                .ForeignKey("dbo.Accounts", t => t.Account_Id)
                .Index(t => t.UserOneId)
                .Index(t => t.UserTwoId)
                .Index(t => t.Account_Id);
            
            CreateTable(
                "dbo.Messages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        UserId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        ConversationId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Conversations", t => t.ConversationId)
                .ForeignKey("dbo.Accounts", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.ConversationId);
            
            CreateTable(
                "dbo.Sports",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SportEvents",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Date = c.DateTime(nullable: false),
                        Description = c.String(),
                        CategoryId = c.Int(nullable: false),
                        OwnerId = c.Int(nullable: false),
                        AdressId = c.Int(nullable: false),
                        ImagePath = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Adress", t => t.AdressId)
                .ForeignKey("dbo.Sports", t => t.CategoryId)
                .ForeignKey("dbo.Accounts", t => t.OwnerId)
                .Index(t => t.CategoryId)
                .Index(t => t.OwnerId)
                .Index(t => t.AdressId);
            
            CreateTable(
                "dbo.Friendhsip",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserOneId = c.Int(nullable: false),
                        UserTwoId = c.Int(nullable: false),
                        Since = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accounts", t => t.UserOneId)
                .ForeignKey("dbo.Accounts", t => t.UserTwoId)
                .Index(t => t.UserOneId)
                .Index(t => t.UserTwoId);
            
            CreateTable(
                "dbo.SportEvents_Accounts",
                c => new
                    {
                        SportEventId = c.Int(nullable: false),
                        AttendeeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.SportEventId, t.AttendeeId })
                .ForeignKey("dbo.SportEvents", t => t.SportEventId, cascadeDelete: true)
                .ForeignKey("dbo.Accounts", t => t.AttendeeId, cascadeDelete: true)
                .Index(t => t.SportEventId)
                .Index(t => t.AttendeeId);
            
            CreateTable(
                "dbo.Accounts_Sports",
                c => new
                    {
                        AccountId = c.Int(nullable: false),
                        SportId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.AccountId, t.SportId })
                .ForeignKey("dbo.Accounts", t => t.AccountId, cascadeDelete: true)
                .ForeignKey("dbo.Sports", t => t.SportId, cascadeDelete: true)
                .Index(t => t.AccountId)
                .Index(t => t.SportId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Friendhsip", "UserTwoId", "dbo.Accounts");
            DropForeignKey("dbo.Friendhsip", "UserOneId", "dbo.Accounts");
            DropForeignKey("dbo.Accounts_Sports", "SportId", "dbo.Sports");
            DropForeignKey("dbo.Accounts_Sports", "AccountId", "dbo.Accounts");
            DropForeignKey("dbo.SportEvents", "OwnerId", "dbo.Accounts");
            DropForeignKey("dbo.SportEvents", "CategoryId", "dbo.Sports");
            DropForeignKey("dbo.SportEvents_Accounts", "AttendeeId", "dbo.Accounts");
            DropForeignKey("dbo.SportEvents_Accounts", "SportEventId", "dbo.SportEvents");
            DropForeignKey("dbo.SportEvents", "AdressId", "dbo.Adress");
            DropForeignKey("dbo.Conversations", "Account_Id", "dbo.Accounts");
            DropForeignKey("dbo.Conversations", "UserTwoId", "dbo.Accounts");
            DropForeignKey("dbo.Conversations", "UserOneId", "dbo.Accounts");
            DropForeignKey("dbo.Messages", "UserId", "dbo.Accounts");
            DropForeignKey("dbo.Messages", "ConversationId", "dbo.Conversations");
            DropForeignKey("dbo.Accounts", "AdressId", "dbo.Adress");
            DropIndex("dbo.Accounts_Sports", new[] { "SportId" });
            DropIndex("dbo.Accounts_Sports", new[] { "AccountId" });
            DropIndex("dbo.SportEvents_Accounts", new[] { "AttendeeId" });
            DropIndex("dbo.SportEvents_Accounts", new[] { "SportEventId" });
            DropIndex("dbo.Friendhsip", new[] { "UserTwoId" });
            DropIndex("dbo.Friendhsip", new[] { "UserOneId" });
            DropIndex("dbo.SportEvents", new[] { "AdressId" });
            DropIndex("dbo.SportEvents", new[] { "OwnerId" });
            DropIndex("dbo.SportEvents", new[] { "CategoryId" });
            DropIndex("dbo.Messages", new[] { "ConversationId" });
            DropIndex("dbo.Messages", new[] { "UserId" });
            DropIndex("dbo.Conversations", new[] { "Account_Id" });
            DropIndex("dbo.Conversations", new[] { "UserTwoId" });
            DropIndex("dbo.Conversations", new[] { "UserOneId" });
            DropIndex("dbo.Accounts", new[] { "AdressId" });
            DropTable("dbo.Accounts_Sports");
            DropTable("dbo.SportEvents_Accounts");
            DropTable("dbo.Friendhsip");
            DropTable("dbo.SportEvents");
            DropTable("dbo.Sports");
            DropTable("dbo.Messages");
            DropTable("dbo.Conversations");
            DropTable("dbo.Adress");
            DropTable("dbo.Accounts");
        }
    }
}
