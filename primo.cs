using System;

class Program
{
    static void Main()
    {
        Console.Write("Ingrese un número entero positivo: ");
        int numero = Convert.ToInt32(Console.ReadLine());

        if (EsPrimo(numero))
        {
            Console.WriteLine($"{numero} es un número primo.");
        }
        else
        {
            Console.WriteLine($"{numero} NO es un número primo.");
        }

        Console.ReadLine();
    }

    static bool EsPrimo(int num)
    {
        
        if (num <= 1)
        {
            return false;
        }

        
        for (int i = 2; i <= Math.Sqrt(num); i++)
        {
            if (num % i == 0)
            {
                return false;
            }
        }

        return true;
    }
}
