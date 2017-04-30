using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;

namespace SportEventApp.Business.Mapping
{
    public class AccountMapper
    {
        public AccountDTO  MapToDTO(Account source)
        {
            AccountDTO target = new AccountDTO();
            target.Id = source.Id;
            target.FullName = source.LastName + " " + source.FirstName;
            target.Email = source.Email;
            target.UserName = source.UserName;

            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapToDTO(source.Adress);

            return target;
        }

        public Account MapFromDTO(AccountDTO source)
        {
            Account target = new Account();
            target.Id = source.Id;
            string[] fullname = source.FullName.Split(new char[0]);
            target.LastName = fullname[0];
            target.FirstName = fullname[1];
            target.UserName = source.UserName;
            target.Email = source.Email;

            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapFromDTO(source.Adress);
            
            return target;
        }
    }
}