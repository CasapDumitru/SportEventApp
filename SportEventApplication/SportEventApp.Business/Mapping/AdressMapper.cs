using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportEventApp.Business.Mapping
{
    public class AdressMapper
    {
        public AdressDTO MapToDTO(Adress source)
        {
            AdressDTO target = new AdressDTO();
            target.Id = source.Id;
            target.latitude = source.latitude;
            target.longitude = source.longitude;
            target.address = source.address;

            return target;
        }

        public Adress MapFromDTO(AdressDTO source)
        {
            Adress target = new Adress();
            target.Id = source.Id;
            target.latitude = source.latitude;
            target.longitude = source.longitude;
            target.address = source.address;

            return target;
        }
    }
}
