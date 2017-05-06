using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class AccountDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z0-9-_.]{5,30}$")]
        public string UserName { get; set; }
        public AdressDTO Adress { get; set; }

    }
}