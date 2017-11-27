using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;

namespace SportEventApp.Business.Mapping
{
    public class SignUpAccountMapper
    {
        public SignUpAccountDTO MapToDTO(Account source)
        {
            SignUpAccountDTO target = new SignUpAccountDTO();
            target.Id = source.Id;
            target.FirstName = source.FirstName;
            target.LastName = source.LastName;
            target.UserName = source.UserName;
            target.Email = source.Email;
            target.Password = source.UserPassword;
            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapToDTO(source.Adress);
            return target;
        }

        public Account MapFromDTO(SignUpAccountDTO source)
        {
            Account target = new Account();
            target.Id = source.Id;
            target.FirstName = source.FirstName;
            target.LastName = source.LastName;
            target.UserName = source.UserName;
            target.Email = source.Email;
            target.UserPassword = source.Password;
            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapFromDTO(source.Adress);
            return target;
        }
    }
}
