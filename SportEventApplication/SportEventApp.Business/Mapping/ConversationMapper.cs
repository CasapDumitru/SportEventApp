using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;
using System.Collections.Generic;

namespace SportEventApp.Business.Mapping
{
    public class ConversationMapper
    {
        public ConversationDTO MapToDTO(Conversation source)
        {
            ConversationDTO target = new ConversationDTO();

            target.Id = source.Id;

            AccountSimpleMapper accountMapper = new AccountSimpleMapper();
            target.UserOne = accountMapper.MapToDTO(source.UserOne);
            target.UserTwo = accountMapper.MapToDTO(source.UserTwo);

            MessageMapper messageMapper = new MessageMapper();
            target.Messages = new HashSet<MessageDTO>();

            return target;
        }

        public Conversation MapFromDTO(ConversationDTO source)
        {
            Conversation target = new Conversation();

            target.Id = source.Id;

            AccountSimpleMapper accountMapper = new AccountSimpleMapper();
            target.UserOne = accountMapper.MapFromDTO(source.UserOne);
            target.UserTwo = accountMapper.MapFromDTO(source.UserTwo);

            MessageMapper messageMapper = new MessageMapper();
            target.Messages = new HashSet<Message>();

            return target;
        }
    }
}
