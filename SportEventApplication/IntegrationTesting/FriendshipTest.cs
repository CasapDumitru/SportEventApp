using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SportEventApp.Business.DTOModels;
using SportEventApp.Busines.Services;
using SportEventApp.Business.Services;
using System.Collections.Generic;
using System.Linq;

namespace IntegrationTesting
{
    /// <summary>
    /// Summary description for FriendshipTest
    /// </summary>
    [TestClass]
    public class FriendshipTest
    {
        [TestMethod]
        public void AddRemoveFriend()
        {

            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountService accountService = new AccountService();
            FriendshipService frService = new FriendshipService();

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

            SignUpAccountDTO account1 = new SignUpAccountDTO();
            account1.FirstName = "Dfsadsa";
            account1.LastName = "Ddsadsad";
            account1.UserName = "Ddsds";
            account1.Email = "popescu2121@gmail.com";
            account1.Adress = address;
            account1.Password = "12345645";



            AccountSimpleDTO acc =  signUpAccountService.addAccount(account);
            AccountSimpleDTO acc1 = signUpAccountService.addAccount(account1);

            frService.AddFriend(acc.Id, acc1.Id);

            var friends = frService.GetAllFriendships(acc.Id);

            FriendshipDTO friendship = friends.Where(fr => (fr.UserOne.Id == acc1.Id | fr.UserTwo.Id == acc1.Id)).FirstOrDefault();

            frService.RemoveFriendship(friendship.Id);

            var friends1 = frService.GetAllFriendships(acc.Id);

            FriendshipDTO friendship1 = friends1.Where(fr => (fr.UserOne.Id == acc1.Id | fr.UserTwo.Id == acc1.Id)).FirstOrDefault();

            accountService.deleteAccount(acc.Id);
            accountService.deleteAccount(acc1.Id);

            Assert.IsNotNull(friendship);
            Assert.IsNull(friendship1);

        }
    }
}
