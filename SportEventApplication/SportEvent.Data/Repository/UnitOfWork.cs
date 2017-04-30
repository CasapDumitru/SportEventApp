using evOlympics.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace evOlympics.Data.Repository
{
    public class UnitOfWork :IDisposable
    {
        private DatabaseContext context;
        public UnitOfWork()
        {
            context = new DatabaseContext();
        }

        public IGenericRepository<T> GetRepository<T>() where T:BaseModel
        {
            return new GenericRepository<T>(context);
        }
        public void Dispose()
        {
            context.Dispose();
            GC.SuppressFinalize(this);
        }
        public void SaveChanges ()
        {
            context.SaveChanges();
        }
    }
}
 