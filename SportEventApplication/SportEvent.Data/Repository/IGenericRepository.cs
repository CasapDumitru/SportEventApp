using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace evOlympics.Data.Repository
{
        public interface IGenericRepository<T> where T : class
        {
            IQueryable<T> GetAll();
            IQueryable<T> FindBy(Expression<Func<T, bool>> predicate);
            void Add(T entity);
            void Delete(int id);
            void Edit(T entity);
            void Save();
            T GetById(int id);
        }
    
}
