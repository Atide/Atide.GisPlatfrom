using System;
using System.Data;
using System.Data.SqlClient;
using Atide.GisPlatfrom.Configuration;
namespace Atide.GisPlatfrom.Repository.DataBase
{
	/// <summary>
	/// 数据库配置
	/// </summary>
	public class DataBaseConfig
	{
		#region SqlServer链接配置
		/// <summary>
		/// 默认的Sql Server的链接字符串
		/// </summary>
        private static string DefaultSqlConnectionString = @"server="+ConfigManager.AppSettings.Ywsqlconn.Server
                                                                                   +";uid="+ ConfigManager.AppSettings.Ywsqlconn.Uid 
                                                                                   +";pwd="+ ConfigManager.AppSettings.Ywsqlconn.Pwd 
                                                                                   +";database="+ ConfigManager.AppSettings.Ywsqlconn.Database;
		public static IDbConnection GetSqlConnection(string sqlConnectionString = null)
		{
			if (string.IsNullOrWhiteSpace(sqlConnectionString))
			{
				sqlConnectionString = DefaultSqlConnectionString;
			}
			IDbConnection conn = new SqlConnection(sqlConnectionString);
			conn.Open();
			return conn;
		}
		#endregion
	}
}
