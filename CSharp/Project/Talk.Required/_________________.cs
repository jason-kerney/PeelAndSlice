using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Talk.Required
{
    public class ОбщиеКонфигурация
    {
        public static void Видыпервоначальногокредита()
        {
            throw new ApplicationException("Нет");

        }

        public static ОбщиеКонфигурация получитьинстанции()
        {
            return null;
        }

        public DatabaseConfiguration получитьконфигурациюбазыданных()
        {
            throw new Exception("почему?");
        }
    }
}
