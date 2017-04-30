using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq.Expressions;
using SportEventApp.Data.Models;

namespace SportEventApp.Data.Repository
{
    public  class GenericRepository< T> :
     IGenericRepository<T> where T : BaseModel
    {

        private DbContext context;
        public GenericRepository(DbContext dbcontext)
        {
            this.context = dbcontext;
        }
       

        public virtual IQueryable<T> GetAll()
        {

            IQueryable<T> query = context.Set<T>();
            return query;
        }

        public IQueryable<T> FindBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {

            IQueryable<T> query = context.Set<T>().Where(predicate);
            return query;
        }

        public virtual void Add(T entity)
        {
            context.Set<T>().Add(entity);
        }

        public virtual void Delete(int id)
        {
            T entity = this.GetById(id);
            context.Set<T>().Attach(entity);
            context.Set<T>().Remove(entity);
        }

        public virtual void Edit(T entity)
        {
            context.Entry(entity).State = System.Data.Entity.EntityState.Modified;
        }

        public virtual void Save()
        {
            context.SaveChanges();
        }

        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }

    }
}
