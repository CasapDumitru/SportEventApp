using SportEventApp.Busines.Services;
using SportEventApp.Business.DTOModels;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/account")]
    public class SignUpAccountController : ApiController
    {
   
        public IHttpActionResult Post(SignUpAccountDTO account)
        {
            var accountService = new SignUpAccountService();
            AccountSimpleDTO accountVM = accountService.addAccount(account);

            if (accountVM == null)
                return NotFound();

            return Ok(accountVM);
        }

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
            if (ModelState.IsValid)
            {
                var accountSignUpService = new SignUpAccountService();

                SignUpAccountDTO accountVM = accountSignUpService.editAccount(suaccountVM);

                if (accountVM == null)
                    return NotFound();

                return Ok(accountVM);
            }
            else
            {
                return BadRequest("The model is not valid");
            }
        }
    }
}
