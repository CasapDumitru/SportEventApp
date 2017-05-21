using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SportEventApp.Busines.Services
{
    public class SportService
    {
        public SportDTO getSportById(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var sportRepository = uow.GetRepository<Sport>();
                Sport sport = sportRepository.GetById(id);

                if (sport == null)
                    return null;


                SportMapper sportMapper = new SportMapper();

                SportDTO svm = sportMapper.MapToDTO(sport);
                return svm;

            }
        }

        public SportDTO addSport(SportDTO sportVM)
        {
            using (var uow = new UnitOfWork())
            {
                var sportRepository = uow.GetRepository<Sport>();
                var querySport = sportRepository.FindBy(sp => sp.Name == sportVM.Name);
                var exist = querySport.FirstOrDefault();

                SportMapper sportMapper = new SportMapper();

                if (exist == null)
                {
                    sportRepository.Add(sportMapper.MapFromDTO(sportVM));
                    uow.SaveChanges();
                    var query = sportRepository.FindBy(s => s.Name == sportVM.Name);
                    var sp = querySport.FirstOrDefault();
                    return sportMapper.MapToDTO(sp);
                }
                else
                    return null;
            }
        }

        public SportDTO deleteSport(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var sportRepository = uow.GetRepository<Sport>();
                var sportEventRepo = uow.GetRepository<SportEvent>();
                var sport = sportRepository.GetById(id);

                if (sport == null)
                    return null;
                else
                {
                    var existSporEvents = sportEventRepo.FindBy(sp => sp.CategoryId == id).FirstOrDefault();
                    if (existSporEvents != null)
                        return null;

                    sportRepository.Delete(id);
                    uow.SaveChanges();
                    
                    SportMapper sportMapper = new SportMapper();
                    SportDTO sportVM = sportMapper.MapToDTO(sport);
                    return sportVM;
                }
            }

        }

        public IEnumerable<SportDTO> getAllSports()
        {
            using (var uow = new UnitOfWork())
            {
                var sportRepository = uow.GetRepository<Sport>();

                var sports = sportRepository.GetAll().ToList();

                List<SportDTO> list = new List<SportDTO>();
                SportMapper sportMapper = new SportMapper();
                foreach (var sport in sports)
                {

                    SportDTO sportVM = sportMapper.MapToDTO(sport);
                    list.Add(sportVM);
                }

                list.OrderBy(sp => sp.Name);
                return list;
            }
        }
    }

}