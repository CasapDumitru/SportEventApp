using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SportEventApp.Busines.Services
{
    public class SignUpAccountService
    {

        public AccountSimpleDTO addAccount(SignUpAccountDTO accountVM)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var adressRepository = uow.GetRepository<Adress>();
                AdressService addressService = new AdressService();

                SignUpAccountMapper accountMaper = new SignUpAccountMapper();
                Account account = accountMaper.MapFromDTO(accountVM);

                var queryAccounts = accountRepository.FindBy(ac => ac.UserName == accountVM.UserName | ac.Email == accountVM.Email);
                var existAc = queryAccounts.FirstOrDefault();

                if (existAc == null)
                {
                    var queryAddress = adressRepository.FindBy(ad => ad.latitude == accountVM.Adress.latitude &
                                                                     ad.longitude == accountVM.Adress.longitude);
                    var existAd = queryAddress.FirstOrDefault();

                    if (existAd != null)
                       account.Adress = existAd;
                }
                else
                    return null;

                accountRepository.Add(account);
                uow.SaveChanges();

                AccountSimpleMapper simpleAccountMapper = new AccountSimpleMapper();
                return simpleAccountMapper.MapToDTO(account);

            }
        }

        public SignUpAccountDTO getAccountById(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var adressRepository = uow.GetRepository<Adress>();
                Account account = accountRepository.GetById(id);

                if (account == null)
                    return null;

                Adress adress = adressRepository.GetById(account.AdressId);
                SignUpAccountMapper accountMapper = new SignUpAccountMapper();
                SignUpAccountDTO accountVM = accountMapper.MapToDTO(account);
                return accountVM;
            }
        }

        public SignUpAccountDTO editAccount(SignUpAccountDTO accountVM)
        {

            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var addressRepository = uow.GetRepository<Adress>();

                var accUser = accountRepository.FindBy(ac => ac.UserName == accountVM.UserName);
                var accEmail = accountRepository.FindBy(ac => ac.Email == accountVM.Email);

                if ((accUser.Count() == 1 && accUser.FirstOrDefault().Id != accountVM.Id) | (accEmail.Count() == 1 && accEmail.FirstOrDefault().Id != accountVM.Id))
                    return null;

                
                AdressMapper addressMapper = new AdressMapper();
                var queryaddress = addressRepository.FindBy(ad => ad.latitude == accountVM.Adress.latitude & ad.longitude == accountVM.Adress.longitude);
                Adress address = queryaddress.FirstOrDefault();

              

                Account account = accountRepository.GetById(accountVM.Id);
                if (address == null)
                {
                    addressRepository.Add(addressMapper.MapFromDTO(accountVM.Adress));
                    uow.SaveChanges();
                }

                address = addressRepository.FindBy(ad => ad.latitude == accountVM.Adress.latitude & ad.longitude == accountVM.Adress.longitude).FirstOrDefault();
                account.AdressId = address.Id;
                account.Adress = address;
                account.LastName = accountVM.LastName;
                account.FirstName = accountVM.FirstName;
                account.Email = accountVM.Email;
                account.UserName = accountVM.UserName;
                account.UserPassword = accountVM.Password;
                accountRepository.Edit(account);
                uow.SaveChanges();
                return accountVM;
            }
        }
    }
 }
