using System;
using System.Data;
using System.Data.Common;

namespace Talk.Required
{
    public class Fruit
    {
        public static int _count;

        public Fruit()
        {
            //throw new DataException("no database connection found");
        }

        public virtual void Save(Person person, DbConnection con)
        {
            throw new Exception("this shouldn't happen");
        }

        public virtual Loan[] Получатьвсезаймыдлятекущегопользователя()
        {
            throw new Exception("TODO: add better error message");
        }

        public virtual void Увеличениенагрузкинаграфа(Person person)
        {
            throw new Exception("unexpected result");
        }
    }
}