using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Atide.GisPlatfrom.IRepository;
using Atide.GisPlatfrom.Common.Security;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Atide.GisPlatfrom.Web.Areas.Maintain.Controllers
{
    [Area("Maintain")]
    public class LoginController : Controller
    {

        private readonly IUserRepository iUserBusiness;
        /// <summary>
        /// 构造函数注入服务
        /// </summary>
        /// <param name="userBusiness"></param>
        public LoginController(IUserRepository userBusiness)//IUserBusiness
        {
            iUserBusiness = userBusiness;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            HttpContext.Session.SetInt32("userid", 0);
            HttpContext.Session.SetString("username", "");
            return View();
        }
        [HttpPost]
        public IActionResult UserLogin(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return Content("empty");
            }
            password = MD5Security.MD5Hash(password);
            var user = iUserBusiness.RetriveOneEntityByNameAndPwd(username, password);
            if (user !=  null)
            {
                HttpContext.Session.SetInt32("userid", user.Id);
                HttpContext.Session.SetString("username", username);
                return Redirect("/Maintain/Home");
            }
            return Content("error");
        }
    }
}
