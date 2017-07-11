using System;
using Atide.GisPlatfrom.IRepository;
using Atide.GisPlatfrom.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace Atide.GisPlatfrom.DependencyInjection
{
	/// <summary>
	/// 注入仓储层
	/// </summary>
	public class RepositoryInjection
	{
		public static void ConfigureRepository(IServiceCollection services)
		{
			services.AddSingleton<IUserRepository, UserRepository>();
		}
	}
}
