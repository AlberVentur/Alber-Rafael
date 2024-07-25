using System;

class Program
{
    static void Main()
    {
        try
        {
           
            Console.Write("Ingrese el primer número: ");
            double numero1 = Convert.ToDouble(Console.ReadLine());

            
            Console.Write("Ingrese el segundo número: ");
            double numero2 = Convert.ToDouble(Console.ReadLine());

            
            double resultado = numero1 * numero2;

           
            Console.WriteLine("El resultado de la multiplicación es: " + resultado);
        }
        catch (FormatException)
        {
            Console.WriteLine("Error: Ingrese un número válido.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Ocurrió un error: " + ex.Message);
        }
    }
}
