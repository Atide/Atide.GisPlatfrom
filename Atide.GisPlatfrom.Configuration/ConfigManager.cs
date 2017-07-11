using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace Atide.GisPlatfrom.Configuration
{
	public static class ConfigManager
	{
		readonly static bool _Error;

		static JsonModelCfg _AppConfig;

		static ConfigManager()
		{

			string path = Path.Combine(AppContext.BaseDirectory, "config.json");
            try{
				var builder = new ConfigurationBuilder();
				builder.AddJsonFile(path);
				_AppConfig = builder.Build().Get<JsonModelCfg>();

            }catch(Exception){
                _Error = true;
            }
			

		}

		public static JsonModelCfg AppSettings
		{
			get
			{
				if (_Error) return null;
				return _AppConfig;
			}
		}
	}
}
