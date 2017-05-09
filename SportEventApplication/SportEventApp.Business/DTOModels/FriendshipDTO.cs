using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.DTOModels
{
    public class FriendshipDTO
    {
        public int Id { get; set; }
        public virtual AccountSimpleDTO UserOne { get; set; }
        public virtual AccountSimpleDTO UserTwo { get; set; }
        public DateTime Since { get; set; }
    }
}
