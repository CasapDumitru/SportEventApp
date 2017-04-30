using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;



namespace SportEventApp.Business.Mapping
{
    public class AccountSimpleMapper
    {
        public AccountSimpleDTO MapToDTO(Account source)
        {
            AccountSimpleDTO target = new AccountSimpleDTO();
            target.Id = source.Id;
            target.FullName = source.LastName + " " + source.FirstName;
            return target;
        }

        public Account MapFromDTO(AccountSimpleDTO source)
        {
            Account target = new Account();
            target.Id = source.Id;
            string[] fullname = source.FullName.Split(new char[0]);
            target.LastName = fullname[0];
            target.FirstName = fullname[1];

            return target;
        }
    }
}