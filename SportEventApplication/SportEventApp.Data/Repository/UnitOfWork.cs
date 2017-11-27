using SportEventApp.Data.Models;
using System;

namespace SportEventApp.Data.Repository
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
 