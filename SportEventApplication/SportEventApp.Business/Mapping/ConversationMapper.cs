using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.Mapping
{
    public class ConversationMapper
    {
        public ConversationDTO MapToDTO(Conversation source)
        {
            ConversationDTO target = new ConversationDTO();

            target.Id = source.Id;

            AccountMapper accountMapper = new AccountMapper();
            target.UserOne = accountMapper.MapToDTO(source.UserOne);
            target.UserTwo = accountMapper.MapToDTO(source.UserTwo);

            MessageMapper messageMapper = new MessageMapper();
            target.Messages = new HashSet<MessageDTO>();

            foreach (var mes in source.Messages)
            {
                target.Messages.Add(messageMapper.MapToDTO(mes));
            }
            return target;

        }

        public Conversation MapFromDTO(ConversationDTO source)
        {
            Conversation target = new Conversation();

            target.Id = source.Id;

            AccountMapper accountMapper = new AccountMapper();
            target.UserOne = accountMapper.MapFromDTO(source.UserOne);
            target.UserTwo = accountMapper.MapFromDTO(source.UserTwo);

            MessageMapper messageMapper = new MessageMapper();
            target.Messages = new HashSet<Message>();

            foreach (var mes in source.Messages)
            {
                target.Messages.Add(messageMapper.MapFromDTO(mes));
            }
            return target;

        }
    }
}
