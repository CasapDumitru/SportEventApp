using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.DTOModels
{
    public class SportEventDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public SportDTO Category { get; set; }
        public AccountDTO Owner { get; set; }
        public AdressDTO Adress { get; set; }
        public string ImagePath { get; set; }
        public string ImageBase64 { get; set; }
        
    }
}