﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace SportEventApp.Business.DTOModels
{
    public class SportEventDetailDTO
    {
        public int Id { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z0-9.,-_]{5,50}$")]
        public string Title { get; set; }
        public DateTime Date { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z0-9.,-_]{5,100}$")]
        public string Description { get; set; }
        public SportDTO Category { get; set; }
        public AccountDTO Owner { get; set; }
        public AdressDTO Adress { get; set; }
        public  ICollection<AccountSimpleDTO> Attendees { get; set; }
        public bool Going { get; set; }
        public string ImagePath { get; set; }
    }
}