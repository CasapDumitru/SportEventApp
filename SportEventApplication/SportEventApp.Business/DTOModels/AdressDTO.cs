using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class AdressDTO
    {
        public int Id { get; set; }
        [Required]
        public string address { get; set; }
        [Required]
        public double latitude { get; set; }
        [Required]
        public double longitude { get; set; }
    }
}