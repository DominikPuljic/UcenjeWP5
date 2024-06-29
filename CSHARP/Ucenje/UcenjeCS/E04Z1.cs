using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace UcenjeCS
{
    internal class E04Z1
    {

        // Korisnik unosi brojčanu vrijednost ocjene od 1 do 5
        // Program ispisuje slovno ocjenu, a ako korsnik nije unosio ocjenu
        // program ispisuje: broj nije ocjena

        public static void Izvedi()
        {

            Console.WriteLine("Unesite brojčanu vrijednost ocjene ( 1 do 5):");

            string input = Console.ReadLine();

            int ocjena;

            bool isNumeric = int.TryParse(input, out ocjena);

            if (isNumeric)
            {

                switch (ocjena)
                {
                    case 1:

                        Console.WriteLine("Ocjena : Nedovoljan");
                        break;

                    case 2:
                        Console.WriteLine("Ocjena : Dovoljan");
                        break;

                    case 3:
                        Console.WriteLine("Ocjena : Dobar");
                        break;

                    case 4:
                        Console.WriteLine("Ocjena :Vrlodobar");
                        break;

                    case 5:
                        Console.WriteLine("Ocjena :Odličan");
                        break;
                    default:
                        Console.WriteLine("Broj nije ocjena");
                        break;







                }
            }
            else
            {

                Console.WriteLine("broj nije ocjena");



            }



        }
    }
}
