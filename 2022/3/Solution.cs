namespace _2022._3;

public static class Solution
{
    private static int GetPriority(char item)
    {
        var asciiValue = (int)item;
        return asciiValue >= 97 ? asciiValue - 96 : asciiValue - 38;
    }
    public static void PartOne()
    {
        var lines = File.ReadLines("3/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var priority = (
            from line in linesArray
            where line.Length > 0
            let compartmentA = line.Substring(0, line.Length / 2)
            let compartmentB = line.Substring(line.Length / 2)
                select compartmentA.Intersect(compartmentB) into duplicates
                select GetPriority(duplicates.First())
            ).Sum();

        Console.WriteLine($"Part One: {priority}");
    }

    public static void PartTwo()
    {
        var lines = File.ReadLines("3/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var score = 0;
        for (var i = 0; i < linesArray.Length; i += 3)
        {
            var elfOne = linesArray[i];
            var elfTwo = linesArray[i + 1];
            var elfThree = linesArray[i + 2];
            var duplicates = elfOne.Intersect(elfTwo).Intersect(elfThree);
            score += GetPriority(duplicates.First());
        }

        Console.WriteLine($"Part Two: {score}");
    }
}
