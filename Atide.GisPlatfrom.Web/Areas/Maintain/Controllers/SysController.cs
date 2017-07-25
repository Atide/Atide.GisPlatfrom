using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Atide.GisPlatfrom.IRepository;
using Atide.GisPlatfrom.Model.TableModel;
using Microsoft.AspNetCore.Http;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Atide.GisPlatfrom.Web.Areas.Maintain.Controllers
{
    [Area("Maintain")]
    public class SysController : Controller
    {

        private readonly IUserRepository _userService;
        /// <summary>
        /// 构造函数注入服务
        /// </summary>
        /// <param name="userBusiness"></param>
        public SysController(IUserRepository userBusiness)//IUserBusiness
        {
            _userService = userBusiness;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [AutoValidateAntiforgeryToken()]
        [HttpPost]
        public IActionResult Index(string oldpassword, string newpwd1, string newpwd2)
        {
            if (HttpContext.Session.GetInt32("userid") == null)
            {
                return MsgContent("未找到该用户，请联系管理员!");
            }
            if (string.IsNullOrEmpty(oldpassword) || string.IsNullOrEmpty(newpwd1) || string.IsNullOrEmpty(newpwd2))
            {
                return MsgContent("请把修改密码信息填写完整!");
            }

            if (newpwd1 != newpwd2)
            {
                return MsgContent("二次密码输入不相同！");
            }

            oldpassword = Common.Security.MD5Security.MD5Hash(oldpassword);
            int userid = int.Parse(HttpContext.Session.GetInt32("userid").ToString());
            string username = HttpContext.Session.GetString("username");
            var list = _userService.RetriveOneEntityByNameAndPwd(username, oldpassword);
            if (list == null)
                return MsgContent("原密码错误！");
            bool isSuccess = _userService.UpdateEntityPwd(new User() { Id = userid, Password = Common.Security.MD5Security.MD5Hash(newpwd1) });
            if (isSuccess)
                return Content("<script>alert('修改密码成功！');parent.location.href='/Admin/Login'</script>", "text/html");
            return MsgContent("密码修改失败！");
        }

        private IActionResult MsgContent(string message)
        {
            return Content("<script> alert(" + message + ");</script>", "text/html");
        }
    }
}
