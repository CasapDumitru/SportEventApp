using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SportEventApp.Business.DTOModels;
using SportEventApp.Busines.Services;

namespace IntegrationTesting
{
    /// <summary>
    /// Summary description for SportEventTest
    /// </summary>
    [TestClass]
    public class SportEventTest
    {
     
        [TestMethod]
        public void AddSportEvent()
        {

            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountService accountService = new AccountService();
            SportService sportService = new SportService();
            SportEventService sportEventService = new SportEventService();

            AdressDTO address = new AdressDTO();
            address.latitude = 50;
            address.longitude = 30;
            address.address = "Beautiful city";

            SignUpAccountDTO account = new SignUpAccountDTO();
            account.FirstName = "Ion";
            account.LastName = "Popescu";
            account.UserName = "Popescu";
            account.Email = "popescu@gmail.com";
            account.Adress = address;
            account.Password = "123456";


            
            AccountSimpleDTO ac =  signUpAccountService.addAccount(account);

            

            AccountDTO owner = accountService.getAccountById(ac.Id);

            SportDTO sp = new SportDTO();
            sp.Name = "SportName";
            SportDTO sport = sportService.addSport(sp);

            SportEventDTO sportEvent = new SportEventDTO();
            sportEvent.Date = DateTime.Now;
            sportEvent.Description = "The best";
            sportEvent.Adress = address;
            sportEvent.Title = "Campionat0001";
            sportEvent.Category = sport;
            sportEvent.Owner = owner;

            sportEvent = sportEventService.addSportEvent(sportEvent);

            sportEventService.deleteSportEvent(sportEvent.Id);
            accountService.deleteAccount(owner.Id);
            sportService.deleteSport(sport.Id);
            


            Assert.IsNotNull(sportEvent);
            Assert.AreEqual(sportEvent.Title, "Campionat0001");
            Assert.AreEqual(sportEvent.Owner.UserName, "Popescu");
            Assert.AreEqual(sportEvent.Category.Name, "SportName");

        }


        [TestMethod]
        public void UpdateSportEvent()
        {

            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountService accountService = new AccountService();
            SportService sportService = new SportService();
            SportEventService sportEventService = new SportEventService();

            AdressDTO address = new AdressDTO();
            address.latitude = 50;
            address.longitude = 30;
            address.address = "Beautiful city";

            SignUpAccountDTO account = new SignUpAccountDTO();
            account.FirstName = "Ion";
            account.LastName = "Popescu";
            account.UserName = "Popescu";
            account.Email = "popescu@gmail.com";
            account.Adress = address;
            account.Password = "123456";



            AccountSimpleDTO ac = signUpAccountService.addAccount(account);



            AccountDTO owner = accountService.getAccountById(ac.Id);

            SportDTO sp = new SportDTO();
            sp.Name = "SportName";
            SportDTO sport = sportService.addSport(sp);

            SportEventDTO sportEvent = new SportEventDTO();
            sportEvent.Date = DateTime.Now;
            sportEvent.Description = "The best";
            sportEvent.Adress = address;
            sportEvent.Title = "Campionat0001";
            sportEvent.Category = sport;
            sportEvent.Owner = owner;

            sportEvent = sportEventService.addSportEvent(sportEvent);


            SportEventDetailService seds = new SportEventDetailService();

            SportEventDetailDTO sportEventDetail = seds.GetSportEvent(sportEvent.Id, owner.Id);

            sportEventDetail.Title = "TitluNou";

            seds.editSportEvent(sportEventDetail);

            sportEventDetail = seds.GetSportEvent(sportEvent.Id, owner.Id);

            sportEventService.deleteSportEvent(sportEvent.Id);
            accountService.deleteAccount(owner.Id);
            sportService.deleteSport(sport.Id);



            Assert.IsNotNull(sportEventDetail);
            Assert.AreEqual(sportEventDetail.Title, "TitluNou");


        }

        [TestMethod]
        public void GoingSportEvent()
        {

            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountService accountService = new AccountService();
            SportService sportService = new SportService();
            SportEventService sportEventService = new SportEventService();

            AdressDTO address = new AdressDTO();
            address.latitude = 50;
            address.longitude = 30;
            address.address = "Beautiful city";

            SignUpAccountDTO account = new SignUpAccountDTO();
            account.FirstName = "Ion";
            account.LastName = "Popescu";
            account.UserName = "Popescu";
            account.Email = "popescu@gmail.com";
            account.Adress = address;
            account.Password = "123456";



            AccountSimpleDTO ac = signUpAccountService.addAccount(account);



            AccountDTO owner = accountService.getAccountById(ac.Id);

            SportDTO sp = new SportDTO();
            sp.Name = "SportName";
            SportDTO sport = sportService.addSport(sp);

            SportEventDTO sportEvent = new SportEventDTO();
            sportEvent.Date = DateTime.Now;
            sportEvent.Description = "The best";
            sportEvent.Adress = address;
            sportEvent.Title = "Campionat0001";
            sportEvent.Category = sport;
            sportEvent.Owner = owner;

            sportEvent = sportEventService.addSportEvent(sportEvent);

            sportEventService.GoingSportEvent(sportEvent.Id, owner.Id);

            SportEventDetailService seds = new SportEventDetailService();

            var sportEventDetail = seds.GetSportEvent(sportEvent.Id,owner.Id);

            AccountSimpleDTO goingAc = null;
            foreach(AccountSimpleDTO acgoing in sportEventDetail.Attendees)
            {
                if (acgoing.Id == owner.Id)
                    goingAc = acgoing;
            }


            sportEventService.deleteSportEvent(sportEvent.Id);
            accountService.deleteAccount(owner.Id);
            sportService.deleteSport(sport.Id);



            Assert.IsNotNull(sportEvent);
            Assert.IsNotNull(goingAc);
            Assert.AreEqual(goingAc.Id, owner.Id);

        }

        [TestMethod]
        public void NotGoingSportEvent()
        {

            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountService accountService = new AccountService();
            SportService sportService = new SportService();
            SportEventService sportEventService = new SportEventService();

            AdressDTO address = new AdressDTO();
            address.latitude = 50;
            address.longitude = 30;
            address.address = "Beautiful city";

            SignUpAccountDTO account = new SignUpAccountDTO();
            account.FirstName = "Ion";
            account.LastName = "Popescu";
            account.UserName = "Popescu";
            account.Email = "popescu@gmail.com";
            account.Adress = address;
            account.Password = "123456";



            AccountSimpleDTO ac = signUpAccountService.addAccount(account);



            AccountDTO owner = accountService.getAccountById(ac.Id);

            SportDTO sp = new SportDTO();
            sp.Name = "SportName";
            SportDTO sport = sportService.addSport(sp);

            SportEventDTO sportEvent = new SportEventDTO();
            sportEvent.Date = DateTime.Now;
            sportEvent.Description = "The best";
            sportEvent.Adress = address;
            sportEvent.Title = "Campionat0001";
            sportEvent.Category = sport;
            sportEvent.Owner = owner;

            sportEvent = sportEventService.addSportEvent(sportEvent);

            sportEventService.GoingSportEvent(sportEvent.Id, owner.Id);

           
            SportEventDetailService seds = new SportEventDetailService();

            var sportEventDetail = seds.GetSportEvent(sportEvent.Id, owner.Id);


            AccountSimpleDTO goingAc = null;
            foreach (AccountSimpleDTO acgoing in sportEventDetail.Attendees)
            {
                if (acgoing.Id == owner.Id)
                    goingAc = acgoing;
            }


            sportEventService.NotGoingSportEvent(sportEvent.Id, owner.Id);

            sportEventDetail = seds.GetSportEvent(sportEvent.Id, owner.Id);

            sportEventService.deleteSportEvent(sportEvent.Id);
            accountService.deleteAccount(owner.Id);
            sportService.deleteSport(sport.Id);



            Assert.IsNotNull(sportEvent);
            Assert.IsNotNull(goingAc);
            Assert.AreEqual(0, sportEventDetail.Attendees.Count);
            Assert.AreEqual(goingAc.Id, owner.Id);

        }
    }
}
