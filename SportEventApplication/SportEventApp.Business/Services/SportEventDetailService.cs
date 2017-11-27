using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SportEventApp.Busines.Services
{
    public class SportEventDetailService
    {
        public SportEventDetailDTO GetSportEvent(int sportEvId, int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var sportEventsRepository = uow.GetRepository<SportEvent>();
                var sportEvent = sportEventsRepository.GetById(sportEvId);
                if (sportEvent == null)
                    return null;
                SportEventDetailMapper sportEventDetailMapper = new SportEventDetailMapper();
                SportEventDetailDTO sportEventVM = sportEventDetailMapper.MapToDTO(sportEvent);

                if (sportEventVM.Attendees.Any(ac => ac.Id == userId))
                    sportEventVM.Going = true;
                else
                    sportEventVM.Going = false;
                return sportEventVM;
            }
        }



        public SportEventDetailDTO editSportEvent(SportEventDetailDTO sportEventVM)
        {

            using (var uow = new UnitOfWork())
            {
                var accountRepository = uow.GetRepository<Account>();
                var addressRepository = uow.GetRepository<Adress>();
                var sportRepository = uow.GetRepository<Sport>();
                var sportEventRepository = uow.GetRepository<SportEvent>();

                SportEventDetailMapper sportEventMapper = new SportEventDetailMapper();
                SportEvent sportEvent = sportEventMapper.MapFromDTO(sportEventVM);

                AdressMapper addressMapper = new AdressMapper();
                var queryaddress = addressRepository.FindBy(ad => ad.latitude == sportEventVM.Adress.latitude & ad.longitude == sportEventVM.Adress.longitude);
                Adress address = queryaddress.FirstOrDefault();

                
                if (address == null)
                {
                    addressRepository.Add(addressMapper.MapFromDTO(sportEventVM.Adress));
                    uow.SaveChanges();
                }
                address = addressRepository.FindBy(ad => ad.latitude == sportEventVM.Adress.latitude & ad.longitude == sportEventVM.Adress.longitude).FirstOrDefault();
                sportEvent.AdressId = address.Id;
                sportEvent.Adress = address;
                sportEvent.OwnerId = sportEventVM.Owner.Id;
                sportEvent.Owner.AdressId = sportEvent.Owner.Adress.Id;

                SportMapper sportMapper = new SportMapper();
                var querysport = sportRepository.FindBy(sp => sp.Name == sportEventVM.Category.Name);
                Sport sport = querysport.FirstOrDefault();


                if (sport == null)
                {
                    sportRepository.Add(sportMapper.MapFromDTO(sportEventVM.Category));
                    uow.SaveChanges();
                }
                sport = sportRepository.FindBy(sp => sp.Name == sportEventVM.Category.Name).FirstOrDefault();
                sportEvent.Category = sport;
                sportEvent.CategoryId = sport.Id;
                sportEventRepository.Edit(sportEvent);
                uow.SaveChanges();
                return sportEventMapper.MapToDTO(sportEvent);
            }
        }
    }
}
