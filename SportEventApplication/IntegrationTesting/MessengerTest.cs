using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SportEventApp.Busines.Services;
using SportEventApp.Business.Services;
using SportEventApp.Business.DTOModels;
using System.Linq;

namespace IntegrationTesting
{

    [TestClass]
    public class MessengerTest
    {
        [TestClass]
        public class FriendshipTest
        {
            [TestMethod]
            public void AddMessageTest()
            {

                SignUpAccountService signUpAccountService = new SignUpAccountService();
                AccountService accountService = new AccountService();
                MessengerService mesService = new MessengerService();

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



                AccountSimpleDTO acc = signUpAccountService.addAccount(account);
                AccountSimpleDTO acc1 = signUpAccountService.addAccount(account1);


                ConversationDTO conv = new ConversationDTO();
                conv.UserOne = acc;
                conv.UserTwo = acc1;

                conv = mesService.CreateConversation(conv);

                MessageDTO message = new MessageDTO();

                message.User = acc;
                message.ConversationId = conv.Id;
                message.Text = "Salut";
                message.Date = DateTime.Now;

                message = mesService.addMessage(message);

                var messages = mesService.GetMessages(5, 1, acc.Id, acc1.Id);

                MessageDTO myMes = messages.FirstOrDefault();

                mesService.deleteMessage(message.Id);
                mesService.RemoveConversation(conv.Id);
                accountService.deleteAccount(acc.Id);
                accountService.deleteAccount(acc1.Id);


                Assert.IsNotNull(message);
                Assert.IsNotNull(conv);
                Assert.IsNotNull(messages);
                Assert.AreEqual(myMes.Text, "Salut");


            }
        }
    }
}
