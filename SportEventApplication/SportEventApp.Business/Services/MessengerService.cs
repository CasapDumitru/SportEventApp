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
        public MessageDTO addMessage(MessageDTO messageDTO)
        {
            using (var uow = new UnitOfWork())
            {
                var messageRepository = uow.GetRepository<Message>();

                MessageMapper messageMapper = new MessageMapper();
                Message message = messageMapper.MapFromDTO(messageDTO);

                messageRepository.Add(message);
                uow.SaveChanges();
                return messageDTO;
            }
        }

        public MessageDTO deleteMessage(int id)
        {
            using (var uow = new UnitOfWork())
            {
                var messageRepository = uow.GetRepository<Message>();
                var message = messageRepository.GetById(id);

                if (message == null)
                    return null;
                else
                {
                    messageRepository.Delete(id);
                    uow.SaveChanges();

                    MessageMapper messageMapper = new MessageMapper();
                    MessageDTO messageDTO = messageMapper.MapToDTO(message);
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
