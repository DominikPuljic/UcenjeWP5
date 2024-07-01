using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vježbanje_1
{
    internal class VZ03
    {
        public static void Izvedi()
        {
            Console.Write("Unesite ocjenu (1-10)");
            string input = Console.ReadLine();
            int ocjena;

            if (int.TryParse(input, out ocjena))
            {
                if (ocjena >= 1 && ocjena <= 10)
                {

                    string slovnaocjena = Console.ReadLine();

                    if (ocjena >= 1 && ocjena <= 2)
                    {
                        slovnaocjena = "vrlološe";
                    }
                    else if (ocjena >= 3 && ocjena <= 4)
                    {
                        slovnaocjena = "loše";
                    }
                    else if (ocjena >= 5 && ocjena <= 6)
                    {
                        slovnaocjena = "osrednji";
                    }
                    else if (ocjena >= 7 && ocjena <= 8)
                    {
                        slovnaocjena = "dobar";
                    }
                    else if (ocjena >= 9 && ocjena <= 10)
                    {

                        slovnaocjena = "Izvrstan";
                    }
                    Console.WriteLine(slovnaocjena);

                }
                else
                {
                    Console.WriteLine("broj nije ocjena");
                }



























            }








        }
}   }
