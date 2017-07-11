
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
//运维后台系统
namespace Atide.GisPlatfrom.Web.Areas.Maintain.Controllers
{
    [Area("Maintain")]
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            if (HttpContext.Session.GetInt32("userid") == null || HttpContext.Session.GetInt32("userid") == 0)
            {
                return Content("<script>alert('Please Login This System');location.href='/Maintain/Login'</script>", "text/html");
            }
            return View();
        }

        public IActionResult Top()
        {
            ViewData["username"] = HttpContext.Session.GetString("username");
            return View();
        }

        public IActionResult Left()
        {
            return View();
        }

        public IActionResult WelCome()
        {
            return View();
        }
    }
}
