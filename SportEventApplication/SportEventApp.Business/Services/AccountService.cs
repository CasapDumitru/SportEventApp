using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SportEventApp.Busines.Services
{
    public class AccountService
    {

        public AccountDTO getAccountById(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var adressRepository = uow.GetRepository<Adress>();
                Account account = accountRepository.GetById(id);

                if (account == null)
                    return null;
                
                Adress adress = adressRepository.GetById(account.AdressId);
                AccountMapper accountMapper = new AccountMapper();
                AccountDTO accountVM = accountMapper.MapToDTO(account);
                return accountVM;  
            }
        }

        public IEnumerable<AccountDTO> getAllAccounts()
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var accounts = accountRepository.GetAll().ToList();
 
                List<AccountDTO> list = new List<AccountDTO>();
                AccountMapper accountMapper = new AccountMapper();
                foreach (var account in accounts)
                {
                    AccountDTO accountVM = accountMapper.MapToDTO(account);
                    list.Add(accountVM);    
                }

                return list;
             }
        }

      
        public AccountDTO deleteAccount(int id)
        {
            using (var uow = new UnitOfWork())
            {
              
                var accountRepository = uow.GetRepository<Account>();
                var account = accountRepository.GetById(id);
                if(account == null)
                {
                    return null;
                }
                else
                {
                    accountRepository.Delete(id);
                    uow.SaveChanges();
                    
                    AccountMapper accountMapper = new AccountMapper();
                    AccountDTO accountVM = accountMapper.MapToDTO(account);
                    return accountVM;
                }              
            }
        }

        public AccountDTO addAccount(AccountDTO accountVM)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var adressRepository = uow.GetRepository<Adress>();
                AdressService addressService = new AdressService();

                AccountMapper accountMaper = new AccountMapper();
                Account account = accountMaper.MapFromDTO(accountVM);

                var queryAccounts = accountRepository.FindBy(ac => ac.UserName == accountVM.UserName | ac.Email == accountVM.Email);
                var existAc = queryAccounts.FirstOrDefault();

                if (existAc == null)
                {
                    var queryAddress = adressRepository.FindBy(ad => ad.latitude == accountVM.Adress.latitude |
                                                                     ad.longitude == accountVM.Adress.longitude);
                    var existAd = queryAddress.FirstOrDefault();

                    if (existAd == null)
                        addressService.addAdress(accountVM.Adress);
                    else
                        account.Adress = existAd;
                }
                else
                    return null;

                accountRepository.Add(account);
                uow.SaveChanges();

                return accountMaper.MapToDTO(account);

            }
        }

        public AccountSimpleDTO Login(string username, string password)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var account = accountRepository.FindBy(e => e.UserName == username && e.UserPassword == password);
                var res = account.FirstOrDefault();
                if(res != null)
                {
                    AccountSimpleMapper accounMapper = new AccountSimpleMapper();
                    return accounMapper.MapToDTO(res);

                }
                return null;
                                 
            }
        }

        public IEnumerable<SportInterestDTO> getSportInterest(int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var sportRepository = uow.GetRepository<Sport>();
                var accountRepository = uow.GetRepository<Account>();

                var account = accountRepository.GetById(userId);
                var sports = sportRepository.GetAll().ToList();

                List<SportInterestDTO> list = new List<SportInterestDTO>();
                foreach (var sport in sports)
                {
                    SportInterestDTO sportIntVM = new SportInterestDTO();
                    sportIntVM.Id = sport.Id;
                    sportIntVM.Name = sport.Name;
                    var ex = account.Interests.FirstOrDefault(sp => sp.Id == sport.Id);
                    if (ex == null)
                        sportIntVM.Interest = false;
                    else
                        sportIntVM.Interest = true;
                    list.Add(sportIntVM);
                }
                return list.OrderBy(sp => sp.Name);
                
            }
           
        }

        public IEnumerable<SportDTO> getMySportInterest(int userId)
        {
            using (var uow = new UnitOfWork())
            {
               
                var accountRepository = uow.GetRepository<Account>();

                var account = accountRepository.GetById(userId);
                var sports = account.Interests;

                List<SportDTO> list = new List<SportDTO>();
                SportMapper sportMapper = new SportMapper();

                foreach (var sport in sports)
                {                       
                  list.Add(sportMapper.MapToDTO(sport));
                }
                list.OrderBy(sp => sp.Name);
                return list;
            }

        }

        public AccountDTO AddInterest(int userId,int sportId)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var sportRepository = uow.GetRepository<Sport>();
                var account = accountRepository.GetById(userId);
                var sport = sportRepository.GetById(sportId);
                if (account == null | sport == null)
                    return null;
                var adressRepository = uow.GetRepository<Adress>();
                account.Interests.Add(sport);
                uow.SaveChanges();
                AccountMapper accounMapper = new AccountMapper();
                return accounMapper.MapToDTO(account);
            }
        }

        public AccountDTO DeleteInterest(int userId, int sportId)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var sportRepository = uow.GetRepository<Sport>();
                var account = accountRepository.GetById(userId);
                var sport = sportRepository.GetById(sportId);
                if (account == null | sport == null)
                    return null;
                var adressRepository = uow.GetRepository<Adress>();

                account.Interests.Remove(sport);
                uow.SaveChanges();
                AccountMapper accounMapper = new AccountMapper();
                return accounMapper.MapToDTO(account);
            }
        }

        public IEnumerable<SportEventDTO> GetCreatedSportEvents(int pageSize, int pageNumber, int id)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                Account account = accountRepository.GetById(id);
                if (account == null)
                    return null;

                List<SportEvent> sportEvents = account.OrganizedSportEvents.ToList();
                sportEvents = sportEvents.OrderByDescending(s => s.Date).ToList();

                var totalCount = sportEvents.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);



                var sportsev = sportEvents.Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToList();

                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();
                foreach (var sportEv in sportsev)
                {
                    list.Add(sportEventMapper.MapToDTO(sportEv));
                }
                return list;
            }
        }
      

        public IEnumerable<SportEventDTO> GetGoingSportEvents(int pageSize,int pageNumber,int id)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                Account account = accountRepository.GetById(id);
                if (account == null)
                    return null;

                List<SportEvent> sportEvents = account.ParticipatedSportEvents.ToList();
                sportEvents = sportEvents.OrderByDescending(s => s.Date).ToList();

                var totalCount = sportEvents.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);



                var sportsev = sportEvents.Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToList();

                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();
                foreach (var sportEv in sportsev)
                {
                    list.Add(sportEventMapper.MapToDTO(sportEv));
                }
                return list;
            }
        }
    }     
 }
