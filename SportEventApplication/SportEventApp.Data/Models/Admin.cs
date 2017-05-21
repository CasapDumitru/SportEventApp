using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportEventApp.Data.Models
{
    public class Admin : BaseModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }

    }
}
