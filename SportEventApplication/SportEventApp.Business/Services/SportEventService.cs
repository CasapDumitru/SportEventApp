using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SportEventApp.Busines.Services
{
    public class SportEventService
    {
        public IEnumerable<SportEventDTO> getAllEvents()
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventsRepository = uow.GetRepository<SportEvent>();
                /*var accountRepository = uow.GetRepository<Account>();
                var adressRepository = uow.GetRepository<Adress>();
                var sportRepository = uow.GetRepository<Sport>();*/

                var sportEvents = sportEventsRepository.GetAll().ToList();


                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();


                foreach (var sportEvent in sportEvents)
                {
                    SportEventDTO sportEventVM = sportEventMapper.MapToDTO(sportEvent);
                    list.Add(sportEventVM);
                }

                return list;
            }
        }


        public SportEventDTO getSportEventBy(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventsRepository = uow.GetRepository<SportEvent>();
                var sportEvent = sportEventsRepository.GetById(id);
                if (sportEvent == null)
                    return null;
                SportEventMapper sportEventMapper = new SportEventMapper();
                SportEventDTO sportEventVM = sportEventMapper.MapToDTO(sportEvent);
                return sportEventVM;
            }
        }


        public IEnumerable<SportEventDTO> GetByPage(int pageSize, int pageNumber)
        {
            var sportEventService = new SportEventService();

            var sportEvents = sportEventService.getAllEvents();

            var totalCount = sportEvents.Count();
            var totalPages = Math.Ceiling((double)totalCount / pageSize);


            sportEvents = sportEvents.OrderByDescending(s => s.Date);
            var sportsev = sportEvents.Skip((pageNumber - 1) * pageSize)
                                    .Take(pageSize)
                                    .ToList();

            return sportsev;

        }


        public SportEventDTO addSportEvent(SportEventDTO sporteventVM)
        {
            using (var uow = new UnitOfWork())
            {

                var sportEventRepository = uow.GetRepository<SportEvent>();
                var adressRepository = uow.GetRepository<Adress>();
                var sportRepository = uow.GetRepository<Sport>();
                var accountRepository = uow.GetRepository<Account>();

                AdressService addressService = new AdressService();
                SportService sportService = new SportService();
                AccountService accountService = new AccountService();


                SportEventMapper sportEventMapper = new SportEventMapper();
                SportEvent sportEvent = sportEventMapper.MapFromDTO(sporteventVM);



                var queryAddress = adressRepository.FindBy(ad => ad.latitude == sportEvent.Adress.latitude |
                                                                     ad.longitude == sportEvent.Adress.longitude);
                var existAd = queryAddress.FirstOrDefault();

                if (existAd != null)
                    sportEvent.Adress = existAd;


                var queryCategory = sportRepository.FindBy(sp => sp.Name == sportEvent.Category.Name);
                var existCategory = queryCategory.FirstOrDefault();

                if (existCategory != null)
                    sportEvent.Category = existCategory;


                var queryOwner = accountRepository.FindBy(ac => ac.UserName == sportEvent.Owner.UserName |
                                                            ac.Email == sportEvent.Owner.Email);
                var existOwner = queryOwner.FirstOrDefault();

                if (existOwner != null)
                    sportEvent.Owner = existOwner;

                sportEvent = sportEventRepository.Add(sportEvent);
                uow.SaveChanges();
                return sportEventMapper.MapToDTO(sportEvent);

            }
        }
        public IEnumerable<SportEventDTO> getSportEventsInterested(List<int> sportsId)
        {
            using (var uow = new UnitOfWork())
            {

                var sportEventRepository = uow.GetRepository<SportEvent>();
                var sportEvents = sportEventRepository.FindBy(sp => sportsId.Contains(sp.CategoryId));

                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();


                foreach (var sportEvent in sportEvents)
                {
                    SportEventDTO sportEventVM = sportEventMapper.MapToDTO(sportEvent);
                    list.Add(sportEventVM);
                }

                return list;
            }
        }

        public IEnumerable<SportEventDTO> GetInterestedByPage(int pageSize, int pageNumber, int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventRepository = uow.GetRepository<SportEvent>();
                var accountRepository = uow.GetRepository<Account>();
                var account = accountRepository.GetById(userId);

                List<int> interests = new List<int>();

                foreach(var sp in account.Interests)
                {
                    interests.Add(sp.Id);
                }

                var sportEvents = sportEventRepository.FindBy(spev => interests.Contains(spev.CategoryId));

                var totalCount = sportEvents.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);


                sportEvents = sportEvents.OrderByDescending(s => s.Date);
                var sportsev = sportEvents.Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToList();

                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();


                foreach (var se in sportsev)
                {
                    SportEventDTO sportEventVM = sportEventMapper.MapToDTO(se);
                    list.Add(sportEventVM);
                }
                return list;

            }

        }


        public IEnumerable<SportEventDTO> GetCreatedByPage(int pageSize, int pageNumber, int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventRepository = uow.GetRepository<SportEvent>();
                var accountRepository = uow.GetRepository<Account>();
                var account = accountRepository.GetById(userId);


                var sportEvents = sportEventRepository.FindBy(spev => spev.OwnerId == account.Id);

                var totalCount = sportEvents.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);


                sportEvents = sportEvents.OrderByDescending(s => s.Date);
                var sportsev = sportEvents.Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToList();

                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();


                foreach (var se in sportsev)
                {
                    SportEventDTO sportEventVM = sportEventMapper.MapToDTO(se);
                    list.Add(sportEventVM);
                }
                return list;

            }

        }


        public SportEventDTO GoingSportEvent(int sportEvId, int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var sportEventRepository = uow.GetRepository<SportEvent>();
                var account = accountRepository.GetById(userId);
                var sportEvent = sportEventRepository.GetById(sportEvId);
                if (account == null | sportEvent == null)
                    return null;
                sportEvent.Attendees.Add(account);
                account.ParticipatedSportEvents.Add(sportEvent);
                uow.SaveChanges();
                SportEventMapper sportEventMapper = new SportEventMapper();
                return sportEventMapper.MapToDTO(sportEvent);
            }
        }

        public SportEventDTO NotGoingSportEvent(int sportEvId, int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var sportEventRepository = uow.GetRepository<SportEvent>();
                var account = accountRepository.GetById(userId);
                var sportEvent = sportEventRepository.GetById(sportEvId);
                if (account == null | sportEvent == null)
                    return null;
                sportEvent.Attendees.Remove(account);
                account.ParticipatedSportEvents.Remove(sportEvent);
                uow.SaveChanges();
                SportEventMapper sportEventMapper = new SportEventMapper();
                return sportEventMapper.MapToDTO(sportEvent);
            }
        }


       
        public IEnumerable<SportEventDTO> GetNearByPage(int pageSize, int pageNumber, float lat, float lng)
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventRepository = uow.GetRepository<SportEvent>();
             

                var sportEvents = sportEventRepository.FindBy(spev => spev.Adress.latitude > (lat-1) & spev.Adress.latitude < (lat+1) & 
                                                                spev.Adress.longitude > (lng - 1) & spev.Adress.longitude < (lng+1));

                var totalCount = sportEvents.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);


                sportEvents = sportEvents.OrderByDescending(s => s.Date);
                var sportsev = sportEvents.Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToList();

                List<SportEventDTO> list = new List<SportEventDTO>();
                SportEventMapper sportEventMapper = new SportEventMapper();


                foreach (var se in sportsev)
                {
                    SportEventDTO sportEventVM = sportEventMapper.MapToDTO(se);
                    list.Add(sportEventVM);
                }
                return list;

            }

        }

        public bool deleteSportEvent(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventRepo = uow.GetRepository<SportEvent>();

                var sportEventSerivce = new SportEventService();

                var sportEvent = sportEventRepo.GetById(id);

                if (sportEvent == null)
                    return false;
                else
                {   
                    if(sportEvent.Attendees != null)
                    {
                        foreach (var aten in sportEvent.Attendees)
                        {
                            aten.ParticipatedSportEvents.Remove(sportEvent);
                           // sportEventSerivce.NotGoingSportEvent(sportEvent.Id, aten.Id);
                        }
                        sportEvent.Attendees = null;
                    }

                    uow.SaveChanges();
                    sportEventRepo.Delete(id);
                    uow.SaveChanges();

                    return true;
                }
            }

        }
    }
}
