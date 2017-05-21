using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SportEventApp.Business.DTOModels;
using SportEventApp.Busines.Services;

namespace IntegrationTesting
{
    [TestClass]
    public class AccountsTest
    {
        [TestMethod]
        public void SignUpAndLogin()
        {
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


            SignUpAccountService signUpAccountService = new SignUpAccountService();
            signUpAccountService.addAccount(account);

            AccountService accountService = new AccountService();

            AccountSimpleDTO login = accountService.Login("Popescu", "123456");

            accountService.deleteAccount(login.Id);

            Assert.IsNotNull(login);
            Assert.AreEqual(login.FullName, account.LastName + " " + account.FirstName);


        }
        [TestMethod]
        public void EditAccount()
        {
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


            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountSimpleDTO ac = signUpAccountService.addAccount(account);

            AccountService accountService = new AccountService();

            SignUpAccountDTO acc = signUpAccountService.getAccountById(ac.Id);

            acc.LastName = "Casap";
            acc.Adress.address = "Cluj";

            acc = signUpAccountService.editAccount(acc);

            accountService.deleteAccount(ac.Id);

            Assert.IsNotNull(acc);
            Assert.AreEqual(acc.LastName,"Casap");
            Assert.AreEqual(acc.Adress.address, "Cluj");


        }

        [TestMethod]
        public void AddAccountWithTheSameUserName()
        {
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


            SignUpAccountService signUpAccountService = new SignUpAccountService();
            AccountSimpleDTO account1 = signUpAccountService.addAccount(account);

            SignUpAccountDTO account2 = new SignUpAccountDTO();
            account2.FirstName = "Ion";
            account2.LastName = "Rotari";
            account2.UserName = "Popescu";
            account2.Email = "rotari@gmail.com";
            account2.Adress = address;
            account2.Password = "3324";

            AccountSimpleDTO account3 = signUpAccountService.addAccount(account2);

            AccountService accountService = new AccountService();
            accountService.deleteAccount(account1.Id);

            Assert.IsNotNull(account1);
            Assert.IsNull(account3);


        }

    }
}
