using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class SignUpAccountDTO
    {
        public int Id { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]{5,30}$")]
        public string FirstName { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]{5,30}$")]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z0-9-_.]{5,30}$")]
        public string UserName { get; set; }
        [Required]
        [RegularExpression(@"^.{6,35}$")]       
        public string Password { get; set; }
        public AdressDTO Adress { get; set; }
    }
}

