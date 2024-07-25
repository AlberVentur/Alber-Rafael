using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Serie Fibonacci del 1 al 50:");

       
        int a = 0;
        int b = 1;

       
        Console.WriteLine(a);

        
        while (b <= 50)
        {
            Console.WriteLine(b);
            int temp = a + b;
            a = b;
            b = temp;
        }

        Console.ReadLine();
    }
}
