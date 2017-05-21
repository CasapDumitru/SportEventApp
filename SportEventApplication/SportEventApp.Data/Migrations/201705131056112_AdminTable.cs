namespace SportEventApp.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AdminTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admin",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Admin");
        }
    }
}
