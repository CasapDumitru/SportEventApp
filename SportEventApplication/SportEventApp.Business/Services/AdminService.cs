using SportEventApp.Business.Mapping;
using SportEventApp.Data.Models;
using SportEventApp.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.Services
{
    public class AdminService
    {
        public int Login(string username, string password)
        {
            using (var uow = new UnitOfWork())
            {
                var adminReposiotory = uow.GetRepository<Admin>();
                var admin = adminReposiotory.FindBy(e => e.UserName == username && e.Password == password).FirstOrDefault();
                if (admin != null)
                {
                    return admin.Id;

                }
                return -1;

            }
        }
    }
}
