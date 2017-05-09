﻿using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/account")]
    public class SignUpAccountController : ApiController
    {
   
        // POST api/<controller>
        public IHttpActionResult Post(SignUpAccountDTO account)
        {
           
                var accountService = new SignUpAccountService();
                AccountSimpleDTO accountVM = accountService.addAccount(account);

                if (accountVM == null)
                    return NotFound();

                return Ok(accountVM);
      
        }


        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var accountSignUpService = new SignUpAccountService();

            SignUpAccountDTO accountVM = accountSignUpService.getAccountById(id);

            if (accountVM == null)
                return NotFound();

            return Ok(accountVM);
        }

  
        public IHttpActionResult Put(SignUpAccountDTO suaccountVM)
        {
            var accountSignUpService = new SignUpAccountService();

            SignUpAccountDTO accountVM = accountSignUpService.editAccount(suaccountVM);

            if (accountVM == null)
                return NotFound();

            return Ok(accountVM);
        }

    }
}