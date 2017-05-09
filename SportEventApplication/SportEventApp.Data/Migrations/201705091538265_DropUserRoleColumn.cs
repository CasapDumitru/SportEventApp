namespace SportEventApp.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DropUserRoleColumn : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Accounts", "UserRole");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Accounts", "UserRole", c => c.Int(nullable: false));
        }
    }
}
