using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class AdressDTO
    {
        public int Id { get; set; }
        public string address { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }
    }
}