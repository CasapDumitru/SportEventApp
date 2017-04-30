using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class AccountDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public AdressDTO Adress { get; set; }

    }
}