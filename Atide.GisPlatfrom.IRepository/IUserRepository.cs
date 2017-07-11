using System;
using Atide.GisPlatfrom.Model.TableModel;
namespace Atide.GisPlatfrom.IRepository
{
	public interface IUserRepository : IRepositoryBase<User>

	{
        /// <summary>
        /// 根据用户名及密码获取一个用户
        /// </summary>
        /// <param name="username">用户名</param>
        /// <param name="password">用户密码</param>
        /// <param name="connectionString">链接字符串</param>
        /// <returns></returns>
        User RetriveOneEntityByNameAndPwd(string username, string password, string connectionString = null);


        /// <summary>
        /// 修改一个用户密码
        /// </summary>
        /// <param name="entity">要修改的用户</param>
        /// <param name="connectionString">链接字符串</param>
        /// <returns></returns>
        bool UpdateEntityPwd(User entity, string connectionString = null);
    }
}
