using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vježbanje_1
{
    internal class VZ02
    {
        public static void Izvedi()
        {
            Console.WriteLine("Unesite prvi broj");
                int  prvibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite drugi broj");
            int drugibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite treći broj");
            int trećibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite četvrti broj");
            int četvrtibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite peti broj");
            int petibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite šesti broj");
            int šestibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite sedmi broj");
            int sedmibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite osmi broj");
            int osmibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite deveti broj");
            int devetibroj = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite deseti broj");
            int desetibroj = int.Parse(Console.ReadLine());

            int najmanjibroj = prvibroj;

            if (drugibroj < najmanjibroj)
            {
                najmanjibroj = drugibroj;
            }
            if (trećibroj < najmanjibroj)
            {
                najmanjibroj = trećibroj;
            }
            if (četvrtibroj < najmanjibroj)
            {
                najmanjibroj = četvrtibroj;
            }
            if (petibroj < najmanjibroj)
            {
                najmanjibroj = petibroj;
            }
            if (šestibroj < najmanjibroj)
            {
                najmanjibroj = šestibroj;
            }
            if (sedmibroj < najmanjibroj)
            {
                najmanjibroj = sedmibroj;
            }
            if (osmibroj < najmanjibroj)
            {
                najmanjibroj = osmibroj;
            }
            if ( devetibroj < najmanjibroj)
            {
                najmanjibroj= devetibroj;
            }
            if (desetibroj < najmanjibroj)
            {
                najmanjibroj= desetibroj;
            }
            Console.WriteLine("Najmanji broj je:" + najmanjibroj);














        }   
    }
}
