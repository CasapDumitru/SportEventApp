using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class SportDTO
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
