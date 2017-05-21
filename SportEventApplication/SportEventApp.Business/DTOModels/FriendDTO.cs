using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.DTOModels
{
    public class FriendDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public AdressDTO Adress { get; set; }
        public bool IsFriend { get; set; }
        public DateTime Since { get; set; }

    }
}
