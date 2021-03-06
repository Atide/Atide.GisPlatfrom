﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Atide.GisPlatfrom.IRepository;
using Atide.GisPlatfrom.Model.TableModel;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Atide.GisPlatfrom.Web.Controllers
{
	/// <summary>
	/// 用户控制器
	/// </summary>
	[Route("api/[controller]")]
	public class UserController : Controller
	{
		private readonly IUserRepository iUserBusiness;
		/// <summary>
		/// 构造函数注入服务
		/// </summary>
		/// <param name="userBusiness"></param>
		public UserController(IUserRepository userBusiness)//IUserBusiness
		{
			iUserBusiness = userBusiness;
		}

		/// <summary>
		/// 获取所有用户
		/// </summary>
		/// <returns></returns>
		[HttpGet]
		//[Route("AllUser")]
		public IEnumerable<User> GetAllUser()
		{
			return iUserBusiness.RetriveAllEntity();
		}

		/// <summary>
		/// 根据主键Id获取一个用户
		/// </summary>
		/// <param name="id">主键Id</param>
		/// <returns></returns>
		[HttpGet("{id}")]
		public User GetOneUser(int id)
		{
			return iUserBusiness.RetriveOneEntityById(id);
		}

		/// <summary>
		/// 新增用户
		/// </summary>
		/// <param name="user">用户实体</param>
		/// <returns></returns>
		[HttpPost]
		public bool CreateUser([FromBody]User user)
		{
			return iUserBusiness.CreateEntity(user);
		}

		/// <summary>
		/// 修改用户
		/// </summary>
		/// <param name="id">主键Id</param>
		/// <param name="user">用户实体</param>
		/// <returns></returns>
		[HttpPut("{id}")]
		public bool UpdateUser(int id, [FromBody]User user)
		{
			user.Id = id;
			return iUserBusiness.UpdateEntity(user);
		}

		/// <summary>
		/// 根据主键Id删除一个用户
		/// </summary>
		/// <param name="id">主键Id</param>
		/// <returns></returns>
		[HttpDelete("{id}")]
		public bool DeleteUser(int id)
		{
			return iUserBusiness.DeleteEntityById(id);
		}
	}
}
