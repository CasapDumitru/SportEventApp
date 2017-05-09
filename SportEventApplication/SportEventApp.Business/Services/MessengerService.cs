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
    public class MessengerService
    {
        public ConversationDTO CreateConversation(ConversationDTO convDTO)
        {
            using (var uow = new UnitOfWork())
            {
                var conversationRepository = uow.GetRepository<Conversation>();
                var acountRepository = uow.GetRepository<Account>();

                var existConv = conversationRepository.GetAll().FirstOrDefault(c => (
                    (c.UserOneId == convDTO.UserOne.Id && c.UserTwoId == convDTO.UserTwo.Id)));

                if (existConv != null)
                    return null;
                else
                {
                    Account acountOne = acountRepository.GetById(convDTO.UserOne.Id);
                    Account acountTwo = acountRepository.GetById(convDTO.UserTwo.Id);
                    ConversationMapper cm = new ConversationMapper();
                    convDTO.UserOne.FullName = acountOne.FirstName + " " + acountOne.LastName;
                    convDTO.UserTwo.FullName = acountTwo.FirstName + " " + acountTwo.LastName;
                    Conversation conversation = cm.MapFromDTO(convDTO);
                    conversation.UserOne = acountOne;
                    conversation.UserTwo = acountTwo;

                    Conversation add = conversationRepository.Add(conversation);
                    return cm.MapToDTO(add);
                }

            }
        }

        public ConversationDTO RemoveConversation(int convID)
        {
            using (var uow = new UnitOfWork())
            {
                var conversationRepo = uow.GetRepository<Conversation>();

                Conversation conv = conversationRepo.GetById(convID);

                if (conv == null)
                    return null;
                else
                {
                    ConversationMapper cm = new ConversationMapper();
                    ConversationDTO convDTO = cm.MapToDTO(conv);
                    conversationRepo.Delete(convID);
                    uow.SaveChanges();
                    return convDTO;
                }
            }
        }

        public MessageDTO addMessage(MessageDTO messageDTO)
        {
            using (var uow = new UnitOfWork())
            {
                var messageRepository = uow.GetRepository<Message>();
                var acountRepository = uow.GetRepository<Account>();
                var conversationRepository = uow.GetRepository<Conversation>();
                MessageMapper messageMapper = new MessageMapper();
                Message message = messageMapper.MapFromDTO(messageDTO);
                message.User = acountRepository.GetById(messageDTO.User.Id);
                message.Conversation = conversationRepository.GetById(messageDTO.Conversation.Id);
                message.Date = DateTime.Now;
                messageRepository.Add(message);
                uow.SaveChanges();
                return messageMapper.MapToDTO(message);
            }
        }

        public MessageDTO deleteMessage(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var messageRepository = uow.GetRepository<Message>();
                var acountRepository = uow.GetRepository<Account>();
                var conversationRepository = uow.GetRepository<Conversation>();

                var message = messageRepository.GetById(id);

                if (message == null)
                    return null;
                else
                {
                    message.Conversation = conversationRepository.GetById(message.ConversationId);
                    message.User = acountRepository.GetById(message.UserId);
                    MessageMapper messageMapper = new MessageMapper();
                    MessageDTO messageDTO = messageMapper.MapToDTO(message);

                    messageRepository.Delete(id);
                    uow.SaveChanges();
                 
                    return messageDTO;
                }
            }
        }

        public IEnumerable<ConversationDTO> getConversationByUserId(int userID)
        {
            using (var uow = new UnitOfWork())
            {
                var conversationRepository = uow.GetRepository<Conversation>();
                var conversations = conversationRepository.FindBy(conv => conv.UserOneId == userID || conv.UserTwoId == userID);

                List<ConversationDTO> list = new List<ConversationDTO>();
                ConversationMapper conversationMapper = new ConversationMapper();


                foreach (var conv in conversations)
                {
                    ConversationDTO convDTO = conversationMapper.MapToDTO(conv);
                    list.Add(convDTO);
                }

                return list;
            }

        }

    }
}
