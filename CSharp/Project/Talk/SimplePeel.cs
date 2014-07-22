#region The Worst of Legacy Code: Forensic Development

#endregion

using System;
using System.Data.Common;
using Talk.Required;

namespace Talk
{
    public class SimplePeel
    {
        public double CalulateTotalMortage(String name, DbConnection con)
        {
            var p = Person.LoadPersonByName(name, con);
            var home = p.GetFinancalInformation().GetHomeEquityLoan();
            var payment = p.GetFinancalInformation().GetFirstMortagePayment();

            if (home != null)
            {
                return home.GetValueOrDefault() +
                       payment.GetValueOrDefault();
            }
            if (payment != null)
            {
                return payment.GetValueOrDefault();
            }
            return 0.00;
        }
    }
}