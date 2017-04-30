using evOlympics.Data.Models;
using System;
using System.Data.Entity.Migrations;
using System.Text;

namespace evOlympics.Data.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<DatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }


        protected override void Seed(DatabaseContext context)
        {
            /*var account = new Account { Id = 1, Email = "workshop@accesa.eu", FirstName = "student", LastName = "workshop" };

            var sports = new Sport[] {
                new Sport { Id = 1, Name = "Swimming" },
                new Sport { Id = 2, Name = "Jogging" }
            };

            var newsSources = new NewsSource[] {
                new NewsSource { Id = 1, AccessToken = "secretToken", Format = NewsSourceFormat.JSON, Source = NewsSourceType.Twitter, Url = "https://www.twitter.com/mynewsquery", OwnerId = 1 },
                new NewsSource { Id = 2, AccessToken = "secretToken", Format = NewsSourceFormat.XML, Source = NewsSourceType.Facebook, Url = "https://api.facebook.com/mynewsquery", OwnerId = 1 }
            };

            var activity = new Activity { Id = 1, Date = DateTime.Now, Log = "Swam 1600m", CategoryId = 1, OwnerId = 1 };

            var newsItems = new NewsItem[] {
                new NewsItem { Id = 1, Data = Encoding.ASCII.GetBytes("newsflash"), SourceId = 1 },
                new NewsItem { Id = 2, Data = Encoding.ASCII.GetBytes("newsbytes"), SourceId = 2 }
            };

            var sportEvent = new SportEvent { Id = 1, Title = "Workshop Marathon", Description = "Fun with Jogging & Friends", CategoryId = 1 };

            foreach (var s in sports)
                account.Interests.Add(s);
            sportEvent.Attendees.Add(account);

            context.Sports.AddOrUpdate(sports);
            context.NewsSources.AddOrUpdate(newsSources);
            context.Activities.AddOrUpdate(activity);
            context.NewsItems.AddOrUpdate(newsItems);
            context.SportEvents.AddOrUpdate(sportEvent);
            context.Accounts.AddOrUpdate(account);*/
        }
    }
}
