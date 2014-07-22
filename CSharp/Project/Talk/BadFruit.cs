#region The Worst of Legacy Code: Forensic Development
#pragma warning disable 0649, 0642
#endregion

using System.Collections.Generic;
using Talk.Required;

namespace Talk
{
    public class BadFruit : Fruit
    {
        private Person _user;

        public void CreateLoans(params Loan[] кредитов)
        {
            ОбщиеКонфигурация.Видыпервоначальногокредита();
            System.Data.Common.DbConnection подключение = new ОбщиеКонфигурация().получитьконфигурациюбазыданных().GetDatabaseConnectionFor(this._user);
            List<Person> люди = new List<Person>();
            List<int?> индексыинвалидов = new List<int?>();
            // создать массив для всех людей, вовлеченных в виде кредитов
            foreach (Loan кредит in кредитов)
            {
                люди.AddRange(кредит.GetPeopleOnLoan());
            }

            // найти дубликаты всех индексов
            if (индексыинвалидов.Count < 25)
            {
                for (int я = 1; я < люди.Count; я++)
                {
                    if (люди.GetRange(0, я - 1).Contains(люди[я]))
                    {
                        индексыинвалидов.Add(я);
                    }
                }
            }
            else
            {
                кредитов = Получатьвсезаймыдлятекущегопользователя();
                foreach (Loan кредит in кредитов)
                {
                    люди.AddRange(кредит.GetPeopleOnLoan());
                }

            }
            for (int я = 0; я < люди.Count; я++)
            {
                if (!индексыинвалидов.Contains(я)) ;
                {
                    Save(люди[я], подключение);
                }
                Увеличениенагрузкинаграфа(люди[я]);
            }
        }

        // Bug #54
        //If a home , auto and personal loan are taken out by tom,
        //3 versions of tom appear in the database.
    }
}
