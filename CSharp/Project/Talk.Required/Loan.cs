using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Talk.Required
{
    public class Loan
    {
        private List<Person> _people;

        public virtual bool IsOverDue()
        {
            throw new Exception("unable to load data");
        }

        public virtual int GetAmount()
        {
            throw new Exception("unable to load data");
        }

        public virtual void SaveStatus(string str, System.Data.Common.DbConnection conn)
        {
            throw new System.Data.DataException("No Connection to data base.");
        }

        public virtual List<Person> GetPeopleOnLoan()
        {
            return _people;
        }

        public virtual void SetPeople(params Person[] people)
        {
            _people = new List<Person>(people);
        }
    }
}
