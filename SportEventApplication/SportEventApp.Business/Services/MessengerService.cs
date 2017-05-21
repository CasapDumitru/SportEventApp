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

                Account ac  = acountRepository.GetById(messageDTO.User.Id); 

                MessageMapper messageMapper = new MessageMapper();
                messageDTO.User.FullName = ac.FirstName + " " + ac.LastName;
                Message message = messageMapper.MapFromDTO(messageDTO);
                message.User = ac;
                message.Conversation = conversationRepository.GetById(messageDTO.ConversationId);
                message.Date = DateTime.Now;
                message = messageRepository.Add(message);
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

        public IEnumerable<MessageDTO> GetMessages(int pageSize,int pageNumber,int userOneId, int userSecondId)
        {
            using (var uow = new UnitOfWork())
            {
                var conversationRepository = uow.GetRepository<Conversation>();
                var messagesRepository = uow.GetRepository<Message>();
                var accountRepository = uow.GetRepository<Account>();

                var conversation = conversationRepository.FindBy(conv => (
                    (conv.UserOneId == userOneId & conv.UserTwoId == userSecondId) |
                    (conv.UserOneId == userSecondId & conv.UserTwoId == userOneId))).FirstOrDefault();

                if (conversation == null)
                    return null;

                var messages = messagesRepository.GetAll().Where(m => m.ConversationId == conversation.Id);

                var totalCount = messages.Count();
                var totalPages = Math.Ceiling((double)totalCount / pageSize);


                messages = messages.OrderByDescending(s => s.Date);

                var messagesPage =  messages.Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToList();

                List<MessageDTO> messDTO = new List<MessageDTO>();

                MessageMapper messageMapper = new MessageMapper();
                foreach(Message m in messagesPage)
                {
                    m.User = accountRepository.GetById(m.UserId);
                    m.Conversation = conversationRepository.GetById(m.ConversationId);
                    messDTO.Add(messageMapper.MapToDTO(m));

                }

                return messDTO;
            }
        }

        public int GetOrCreateConversation(int userOneId,int userTwoId)
        {
            using (var uow = new UnitOfWork())
            {
                var conversationRepository = uow.GetRepository<Conversation>();
                var accountRepository = uow.GetRepository<Account>();

                var conversation = conversationRepository.FindBy(conv => (
                   (conv.UserOneId == userOneId & conv.UserTwoId == userTwoId) |
                   (conv.UserOneId == userTwoId & conv.UserTwoId == userOneId))).FirstOrDefault();

                if (conversation != null)
                    return conversation.Id;

                Conversation createConv = new Conversation();

                createConv.UserOne = accountRepository.GetById(userOneId);
                createConv.UserTwo = accountRepository.GetById(userTwoId);
                createConv.UserOneId = userOneId;
                createConv.UserTwoId = userOneId;

                Conversation add = conversationRepository.Add(createConv);

                return add.Id;

            }
        }
    }
}
