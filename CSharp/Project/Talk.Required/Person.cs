using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Talk.Required
{
    public class Person
    {
        private string _name;

        public Person(string str)
        {
            _name = str;
        }

        public Person GetFinancalInformation()
        {
            throw new Exception("Cannot load financial info");
        }

        public int? GetHomeEquityLoan()
        {
            return null;
        }

        public string GetName()
        {
            return _name;
        }

        public override string ToString()
        {
            return _name;
        }

        public int? GetFirstMortagePayment()
        {
            return null;
        }

        public static Person LoadPersonByName(string name, System.Data.Common.DbConnection con)
        {
            throw new Exception("Cannot connect to database");
        }
    }
}
