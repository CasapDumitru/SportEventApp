using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;

namespace SportEventApp.Business.Mapping
{
    public class SportEventMapper
    {
        public SportEventDTO MapToDTO(SportEvent source)
        {
            SportEventDTO target = new SportEventDTO();

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

            return target;
        }

        public SportEvent MapFromDTO(SportEventDTO source)
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
