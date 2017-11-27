using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;

namespace SportEventApp.Business.Mapping
{
    public class FriendshipMapper
    {
        public FriendshipDTO MapToDTO(Friendship source)
        {
            FriendshipDTO target = new FriendshipDTO();
            target.Id = source.Id;
            target.Since = source.Since;

            AccountSimpleMapper accountMapper = new AccountSimpleMapper();
            target.UserOne = accountMapper.MapToDTO(source.UserOne);
            target.UserTwo = accountMapper.MapToDTO(source.UserTwo);

            return target;
        }

        public Friendship MapFromDTO(FriendshipDTO source)
        {
            Friendship target = new Friendship();
            target.Id = source.Id;
            target.Since = source.Since;

            AccountSimpleMapper accountMapper = new AccountSimpleMapper();
            target.UserOne = accountMapper.MapFromDTO(source.UserOne);
            target.UserTwo = accountMapper.MapFromDTO(source.UserTwo);

            return target;
        }
    }
}
