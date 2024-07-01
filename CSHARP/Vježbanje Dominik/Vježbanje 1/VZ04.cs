using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vježbanje_1
{
    internal class VZ04
    {
        public static void Izvedi()
        {
            Console.Write("Unesite cijeli broj");
            String input = Console.ReadLine();
            int broj;

            if (int.TryParse(input, out broj))
            {
                if (broj % 2 == 0)
                {
                    Console.WriteLine("Broj je paran");
                }
                else
                {
                    Console.WriteLine("Broje je neparan");
                }
                
                
                
                
            }
            else
            {
                Console.WriteLine("Uneseni broj nije cijeli broj");
            }



















        }
    }
}
