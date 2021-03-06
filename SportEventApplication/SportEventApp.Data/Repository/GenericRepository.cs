﻿using System;
using System.Linq;
using System.Data.Entity;
using SportEventApp.Data.Models;
using System.Data.Entity.Migrations;

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

        public T Add(T entity)
        {
            context.Set<T>().Add(entity);
            this.context.SaveChanges();
            return entity;
        }

        public virtual void Delete(int id)
        {
            T entity = this.GetById(id);
            context.Set<T>().Attach(entity);
            context.Set<T>().Remove(entity);
        }

        public virtual void Edit(T entity)
        {
            //context.Entry(entity).State = System.Data.Entity.EntityState.Modified;
            context.Set<T>().AddOrUpdate(entity);
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
