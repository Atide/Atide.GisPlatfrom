using System;
namespace Atide.GisPlatfrom.Configuration
{
public class JsonModelCfg
	{
		public string Url { get; set; }
		public Ywsqlconn Ywsqlconn { get; set; }
	}

	public class Ywsqlconn
	{
		public string Server { get; set; }
		public string Uid { get; set; }
        public string Pwd { get; set; }
        public string Database { get; set; }
	}
}
