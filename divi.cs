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

            
            double resultado = numero1 / numero2;

            
            Console.WriteLine("El resultado de la división es: " + resultado);
        }
        catch (FormatException)
        {
            Console.WriteLine("Error: Ingrese un número válido.");
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Error: No se puede dividir por cero.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Ocurrió un error: " + ex.Message);
        }
    }
}
