using System;
namespace Atide.GisPlatfrom.Model.TableModel
{
    public class User
    {
		/// <summary>
		/// 用户ID
		/// </summary>
		public int Id { get; set; }
		/// <summary>
		/// 用户名
		/// </summary>
		public string UserName { get; set; }

		/// <summary>
		/// 密码
		/// </summary>
		public string Password { get; set; }

		/// <summary>
		/// 性别（0女，1男）
		/// </summary>
		public bool Gender { get; set; }

		/// <summary>
		/// 出生年月日
		/// </summary>
		public DateTime Birthday { get; set; }
    }
}
