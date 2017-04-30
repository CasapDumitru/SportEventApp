using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.Mapping
{
    public class SportEventDetailMapper
    {
        public SportEventDetailDTO MapToDTO(SportEvent source)
        {
            SportEventDetailDTO target = new SportEventDetailDTO();

            target.Id = source.Id;
            target.Date = source.Date;
            target.Description = source.Description;
            target.Title = source.Title;
            target.ImagePath = source.ImagePath;

            AccountMapper accountMapper = new AccountMapper();
            target.Owner = accountMapper.MapToDTO(source.Owner);

            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapToDTO(source.Adress);

            SportMapper sportMapper = new SportMapper();
            target.Category = sportMapper.MapToDTO(source.Category);

            AccountSimpleMapper accountSimpleMapper = new AccountSimpleMapper();
            target.Attendees = new HashSet<AccountSimpleDTO>();

            foreach(var ac in source.Attendees)
            {
                target.Attendees.Add(accountSimpleMapper.MapToDTO(ac));
            }

            return target;

        }

        public SportEvent MapFromDTO(SportEventDetailDTO source)
        {
            SportEvent target = new SportEvent();
            AccountMapper accountMapper = new AccountMapper();
            target.Owner = accountMapper.MapFromDTO(source.Owner);

            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapFromDTO(source.Adress);

            SportMapper sportMapper = new SportMapper();
            target.Category = sportMapper.MapFromDTO(source.Category);

            target.Id = source.Id;
            target.Date = source.Date;
            target.Description = source.Description;
            target.Title = source.Title;
            target.ImagePath = source.ImagePath;
            return target;
        }
    }
}