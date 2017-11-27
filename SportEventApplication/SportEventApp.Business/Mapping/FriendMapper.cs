using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;

namespace SportEventApp.Business.Mapping
{
    public class FriendMapper
    {
        public FriendDTO MapToDTO(Account source)
        {
            FriendDTO target = new FriendDTO();
            target.Id = source.Id;
            target.FullName = source.LastName + " " + source.FirstName;
            target.Email = source.Email;
            target.UserName = source.UserName;

            AdressMapper adressMapper = new AdressMapper();
            target.Adress = adressMapper.MapToDTO(source.Adress);

            return target;
        }
    }
}
