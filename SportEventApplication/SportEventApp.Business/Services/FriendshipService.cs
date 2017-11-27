using SportEventApp.Business.DTOModels;
using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

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

        public FriendDTO GetDetailFriend(int userId,int friendId)
        {
            using (var uow = new UnitOfWork())
            {
                var accountRepo = uow.GetRepository<Account>();
                var friendshipRepo = uow.GetRepository<Friendship>();

                Account account = accountRepo.GetById(friendId);

                Friendship existFriendship = friendshipRepo.GetAll().FirstOrDefault(f => (
                    (f.UserOneId == userId & f.UserTwoId == friendId) |
                    (f.UserOneId == friendId & f.UserTwoId == userId)));

                FriendMapper fm = new FriendMapper();
                FriendDTO frDTO = fm.MapToDTO(account);

                if(existFriendship != null)
                {
                    frDTO.IsFriend = true;
                    frDTO.Since = existFriendship.Since;
                }
                else
                {
                    frDTO.IsFriend = false;
                }
                return frDTO;

            }
        }

        public FriendshipDTO DeleteFriend(int userId,int friendId)
        {
            using (var uow = new UnitOfWork())
            {
                var friendshipRepository = uow.GetRepository<Friendship>();


                Friendship existFriendship = friendshipRepository.GetAll().FirstOrDefault(f => (
                    (f.UserOneId == userId & f.UserTwoId == friendId) |
                    (f.UserOneId == friendId & f.UserTwoId == userId)));

                if (existFriendship == null)
                    return null;
                else
                {
                    FriendshipMapper fm = new FriendshipMapper();
                    FriendshipDTO fmDTO = fm.MapToDTO(existFriendship);
                    friendshipRepository.Delete(existFriendship.Id);
                    uow.SaveChanges();
                    return fmDTO;
                }
            }
        }

        public FriendshipDTO AddFriend(int userId,int friendId)
        {
            using (var uow = new UnitOfWork())
            {
                var friendshipRepository = uow.GetRepository<Friendship>();
                var acountRepository = uow.GetRepository<Account>();

                Friendship existFriendship = friendshipRepository.GetAll().FirstOrDefault(f => (
                    (f.UserOneId == userId & f.UserTwoId == friendId) |
                    (f.UserOneId == friendId & f.UserTwoId == userId)));

                if (existFriendship != null)
                    return null;
                else
                {
                    Account acountOne = acountRepository.GetById(userId);
                    Account acountTwo = acountRepository.GetById(friendId);
                    FriendshipMapper fm = new FriendshipMapper();
                    Friendship friendship = new Friendship();
                    friendship.UserOne = acountOne;
                    friendship.UserTwo = acountTwo;
                    friendship.Since = DateTime.Now;

                    Friendship add = friendshipRepository.Add(friendship);
                    return fm.MapToDTO(add);
                }

            }
        }
    }
}
