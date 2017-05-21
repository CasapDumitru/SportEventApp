using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Business.DTOModels
{
    public class AdminDTO
    {
        public int Id;
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
