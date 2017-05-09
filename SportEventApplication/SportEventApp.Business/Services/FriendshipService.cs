using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.Services
{
    public class FriendshipService
    {
        public FriendshipDTO AddFriendship(FriendshipDTO friendshipDTO)
        {
            using (var uow = new UnitOfWork())
            {
                var friendshipRepository = uow.GetRepository<Friendship>();
                var acountRepository = uow.GetRepository<Account>();
               
                var existFriendship = friendshipRepository.GetAll().FirstOrDefault(f => (
                    (f.UserOneId == friendshipDTO.UserOne.Id && f.UserTwoId == friendshipDTO.UserTwo.Id) ));

                if (existFriendship != null)
                    return null;
                else
                {
                    Account acountOne = acountRepository.GetById(friendshipDTO.UserOne.Id);
                    Account acountTwo = acountRepository.GetById(friendshipDTO.UserTwo.Id);
                    FriendshipMapper fm = new FriendshipMapper();
                    friendshipDTO.Since = DateTime.Now;
                    friendshipDTO.UserOne.FullName = acountOne.FirstName + " " + acountOne.LastName;
                    friendshipDTO.UserTwo.FullName = acountTwo.FirstName + " " + acountTwo.LastName;
                    Friendship friendship = fm.MapFromDTO(friendshipDTO);
                    friendship.UserOne = acountOne;
                    friendship.UserTwo = acountTwo;

                    Friendship add =  friendshipRepository.Add(friendship);
                    return fm.MapToDTO(add);                       
                }

            }
        }

        public FriendshipDTO RemoveFriendship(int friendshipID)
        {
            using (var uow = new UnitOfWork())
            {
                var friendshipRepository = uow.GetRepository<Friendship>();

                Friendship fr = friendshipRepository.GetById(friendshipID);

                if (fr == null)
                    return null;
                else
                {
                    FriendshipMapper fm = new FriendshipMapper();
                    FriendshipDTO fmDTO = fm.MapToDTO(fr);
                    friendshipRepository.Delete(friendshipID);
                    uow.SaveChanges();
                    return fmDTO;
                }
            }
        }
        public IEnumerable<FriendshipDTO> GetAllFriendships(int userId)
        {
            using (var uow = new UnitOfWork())
            {
                var friendshipRepository = uow.GetRepository<Friendship>();

                List<Friendship> friends = friendshipRepository.GetAll().Where(f =>
                    f.UserOneId == userId | f.UserTwoId == userId).ToList(); ;

                List<FriendshipDTO> friendsDTO = new List<FriendshipDTO>();

                FriendshipMapper fm = new FriendshipMapper();

                foreach(Friendship f in friends)
                {
                    friendsDTO.Add(fm.MapToDTO(f));
                }
                return friendsDTO;                  
            }
        }
    }
}
