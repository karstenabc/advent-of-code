using Microsoft.VisualBasic.CompilerServices;

namespace _2022._1;

public static class Solution
{
    public static void PartOne()
    {
        var lines = File.ReadLines("1/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var calories = 0;
        var highestCalories = 0;
        foreach (var line in linesArray)
        {
            if (line == "")
            {
                if (calories > highestCalories)
                {
                    highestCalories = calories;
                }
                calories = 0;
            }
            else
            {
                calories += IntegerType.FromString(line);
            }

            if (line == linesArray.Last())
            {
                if (calories > highestCalories)
                {
                    highestCalories = calories;
                }
            }
        }
        
        Console.WriteLine($"Part One: {highestCalories}");
    }

    public static void PartTwo()
    {
        var lines = File.ReadLines("1/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var elves = new List<int>();
        var calories = 0;
        foreach (var line in linesArray)
        {
            if (line == "")
            {
                elves.Add(calories);
                calories = 0;
            }
            else
            {
                calories += IntegerType.FromString(line);
            }

            if (line == linesArray.Last())
            {
                elves.Add(calories);
            }
        }
        
        var topThree = (from elf in elves
            orderby elf descending
            select elf).Take(3).Sum();

        Console.WriteLine($"Part Two: {topThree}");
    }
}
