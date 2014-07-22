#region The Worst of Legacy Code: Forensic Development

#endregion

using System;
using System.Data.Common;
using Talk.Required;

namespace Talk.Originals
{
    public class SimplePeel
    {
        public double CalulateTotalMortage(String name, DbConnection con)
        {
            Person p = Person.LoadPersonByName(name, con);
            if (p.GetFinancalInformation().GetHomeEquityLoan() != null)
            {
                return p.GetFinancalInformation().GetHomeEquityLoan().GetValueOrDefault() +
                       p.GetFinancalInformation().GetFirstMortagePayment().GetValueOrDefault();
            }
            if (p.GetFinancalInformation().GetFirstMortagePayment() != null)
            {
                return p.GetFinancalInformation().GetFirstMortagePayment().GetValueOrDefault();
            }
            return 0.00;
        }
    }
}