using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vježbanje_1
{
    internal class VZ01
    {
        public static void Izvedi()
        {
            Console.Write(" Upiši 3 cijela broja");

            int prvibroj = int .Parse(Console.ReadLine());

            Console.WriteLine(" Unesite drugi broj");

            int drugibroj = int .Parse(Console.ReadLine());

            Console.WriteLine("Unesite treći broj");

            int trećibroj = int.Parse(Console.ReadLine());

            int najmanjibroj = prvibroj;

            if (drugibroj < najmanjibroj)

            {
                najmanjibroj = drugibroj;
            }
            if (trećibroj < najmanjibroj)
            {
                najmanjibroj = trećibroj;

            }
            Console.WriteLine(" Najmanji broj je:" + najmanjibroj);  








        }
    }
}
