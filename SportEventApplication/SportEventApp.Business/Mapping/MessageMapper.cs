using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.Mapping
{
    public class MessageMapper
    {
        public MessageDTO MapToDTO(Message source)
        {
            MessageDTO target = new MessageDTO();
            target.Id = source.Id;
            target.Text = source.Text;
            target.Date = source.Date;

            AccountMapper accountMapper = new AccountMapper();
            target.User = accountMapper.MapToDTO(source.User);

            ConversationMapper conversationMapper = new ConversationMapper();
            target.User = accountMapper.MapToDTO(source.User);

            return target;
        }

        public Message MapFromDTO(MessageDTO source)
        {
            Message target = new Message();
            target.Id = source.Id;
            target.Text = source.Text;
            target.Date = source.Date;

            AccountMapper accountMapper = new AccountMapper();
            target.User = accountMapper.MapFromDTO(source.User);

            ConversationMapper conversationMapper = new ConversationMapper();
            target.User = accountMapper.MapFromDTO(source.User);

            return target;
        }

    }
}
