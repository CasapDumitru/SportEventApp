using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SportEventApp.Busines.Services
{
    public class AdressService
    {

        public AdressDTO getAdressById(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var adressRepository = uow.GetRepository<Adress>();
                Adress adress = adressRepository.GetById(id);

                if (adress == null)
                    return null;

                AdressMapper adressMapper = new AdressMapper();
                AdressDTO adressVM = adressMapper.MapToDTO(adress);
                return adressVM;

            }
        }

        public AdressDTO addAdress(AdressDTO adressVM)
        {
            using (var uow = new UnitOfWork())
            {
                var adressRepository = uow.GetRepository<Adress>();

                var query = adressRepository.FindBy(ad => ad.latitude == adressVM.latitude && ad.longitude == adressVM.longitude);
                var existAd = query.FirstOrDefault();

                if (existAd == null)
                {
                    AdressMapper adressMapper = new AdressMapper();
                    Adress adress = adressMapper.MapFromDTO(adressVM);
                    adressRepository.Add(adress);
                    uow.SaveChanges();
                    return adressVM;
                }
                else
                    return null;
            }
        }

        public AdressDTO deleteAdress(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var adressRepository = uow.GetRepository<Adress>();
                var adress = adressRepository.GetById(id);

                if (adress == null)
                    return null;
                else
                {
                    adressRepository.Delete(id);
                    uow.SaveChanges();
                    
                    AdressMapper adressMapper = new AdressMapper();
                    AdressDTO adressVM = adressMapper.MapToDTO(adress);
                    return adressVM;
                }
            }
        }

        public IEnumerable<Adress> getListOfAllAdress()
        {
            using (var uow = new UnitOfWork())
            {
                var adressRepository = uow.GetRepository<Adress>();
                var allAdress = adressRepository.GetAll().ToList();
                return allAdress;            
            }
        }
    }
}