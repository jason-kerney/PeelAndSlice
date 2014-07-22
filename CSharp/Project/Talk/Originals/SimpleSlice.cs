#region The Worst of Legacy Code: Forensic Development

#endregion

using System.Data.Common;
using Talk.Required;

namespace Talk.Originals
{
    public class SimpleSlice
    {
        public void EscalateProblems(Loan[] loans, DbConnection conn)
        {
            foreach (Loan loan in loans)
            {
                if (loan.IsOverDue() && (loan.GetAmount() > 5000))
                {
                    loan.SaveStatus("Critical", conn);
                }
                else if (loan.IsOverDue() && (loan.GetAmount() > 50))
                {
                    loan.SaveStatus("Escalated", conn);
                }
            }
        }
    }
}