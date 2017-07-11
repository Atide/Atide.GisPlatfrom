using System;
using System.Collections.Generic;
using System.Data;
using Atide.GisPlatfrom.IRepository;
using Atide.GisPlatfrom.Model.TableModel;
using Atide.GisPlatfrom.Repository.DataBase;
using Dapper;

namespace Atide.GisPlatfrom.Repository
{

		/// <summary>
		/// 用户仓储
		/// </summary>
		/// <typeparam name="User"></typeparam>
		public class UserRepository : IUserRepository
		{
			/// <summary>
			/// 创建一个用户
			/// </summary>
			/// <param name="entity">用户</param>
			/// <param name="connectionString">链接字符串</param>
			/// <returns></returns>
			public bool CreateEntity(User entity, string connectionString = null)
			{
				using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
				{
					string insertSql = @"INSERT INTO [dbo].[User]
                                           ([UserName]
                                           ,[Password]
                                           ,[Gender]
                                           ,[Birthday])
                                     VALUES
                                           (@UserName
                                           ,@Password
                                           ,@Gender
                                           ,@Birthday)";
					return conn.Execute(insertSql, entity) > 0;
				}
			}

			/// <summary>
			/// 根据主键Id删除一个用户
			/// </summary>
			/// <param name="id">主键Id</param>
			/// <param name="connectionString">链接字符串</param>
			/// <returns></returns>
			public bool DeleteEntityById(int id, string connectionString = null)
			{
				using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
				{
					string deleteSql = @"DELETE FROM [dbo].[User]
                                            WHERE Id = @Id";
					return conn.Execute(deleteSql, new { Id = id }) > 0;
				}
			}

			/// <summary>
			/// 获取所有用户
			/// </summary>
			/// <param name="connectionString">链接字符串</param>
			/// <returns></returns>
			public IEnumerable<User> RetriveAllEntity(string connectionString = null)
			{
				using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
				{
					string querySql = @"SELECT [Id]
                                          ,[UserName]
                                          ,[Password]
                                          ,[Gender]
                                          ,[Birthday]
                                      FROM [dbo].[User]";
					return conn.Query<User>(querySql);
				}
			}

			/// <summary>
			/// 根据主键Id获取一个用户
			/// </summary>
			/// <param name="id">主键Id</param>
			/// <param name="connectionString">链接字符串</param>
			/// <returns></returns>
			public User RetriveOneEntityById(int id, string connectionString = null)
			{
				using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
				{
					string querySql = @"SELECT [Id]
                                          ,[UserName]
                                          ,[Password]
                                          ,[Gender]
                                          ,[Birthday]
                                      FROM [dbo].[User]
                                     WHERE Id = @Id";
					return conn.QueryFirstOrDefault<User>(querySql, new { Id = id });
				}
			}

        /// <summary>
        /// 根据用户名及密码获取一个用户
        /// </summary>
        /// <param name="username">用户名</param>
        /// <param name="password">用户密码</param>
        /// <param name="connectionString">链接字符串</param>
        /// <returns></returns>
        public User RetriveOneEntityByNameAndPwd(string username, string password, string connectionString = null)
        {
            using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
            {
                string querySql = @"SELECT [Id]
                                          ,[UserName]
                                          ,[Password]
                                          ,[Gender]
                                          ,[Birthday]
                                      FROM [dbo].[User]
                                     WHERE UserName = @UserName AND 
                                           Password = @Password";
                return conn.QueryFirstOrDefault<User>(querySql, new { UserName = username, Password = password });
            }
        }

        /// <summary>
        /// 修改一个用户
        /// </summary>
        /// <param name="entity">要修改的用户</param>
        /// <param name="connectionString">链接字符串</param>
        /// <returns></returns>
        public bool UpdateEntity(User entity, string connectionString = null)
			{
				using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
				{
					string updateSql = @"UPDATE [dbo].[User]
                                       SET [UserName] = @UserName
                                          ,[Password] = @Password
                                          ,[Gender] = @Gender
                                          ,[Birthday] = @Birthday
                                     WHERE Id = @Id";
					return conn.Execute(updateSql, entity) > 0;
				}
			}

        /// <summary>
        /// 修改一个用户密码
        /// </summary>
        /// <param name="entity">要修改的用户</param>
        /// <param name="connectionString">链接字符串</param>
        /// <returns></returns>
        public bool UpdateEntityPwd(User entity, string connectionString = null)
        {
            using (IDbConnection conn = DataBaseConfig.GetSqlConnection(connectionString))
            {
                string updateSql = @"UPDATE [dbo].[User]
                                        SET [Password] = @Password 
                                      WHERE Id = @Id";
                return conn.Execute(updateSql, entity) > 0;
            }
        }
    }

}
