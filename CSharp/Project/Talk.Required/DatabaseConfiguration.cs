using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Talk.Required
{
    public class DatabaseConfiguration
    {
        public System.Data.Common.DbConnection GetDatabaseConnectionFor(Person user)
        {
            throw new ApplicationException("nope");
        }
    }
}
