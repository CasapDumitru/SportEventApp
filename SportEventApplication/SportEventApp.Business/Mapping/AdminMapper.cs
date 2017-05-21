using SportEventApp.Business.DTOModels;
using SportEventApp.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.Mapping
{
    public class AdminMapper
    {
        public AdminDTO MapToDTO(Admin source)
        {
            AdminDTO target = new AdminDTO();
            target.Id = source.Id;
            target.UserName = source.UserName;
            target.Password = source.Password;

            return target;
        }

        public Admin MapFromDTO(AdminDTO source)
        {
            Admin target = new Admin();

            target.Id = source.Id;
            target.UserName = source.UserName;
            target.Password = source.Password;

            return target;
        }
    }
}
