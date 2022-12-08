namespace _2022._4;

public static class Solution
{
    // Convert sector string to array of sectors
    private static int[] GetWorkSectors(string work)
    {
        var sectors = new List<int>();
        var start = Convert.ToInt16(work.Split("-")[0]);
        var end = Convert.ToInt16(work.Split("-")[1]);

        for (int i = start; i <= end; i++)
        {
            sectors.Add(i);
        }

        return sectors.ToArray();
    }
    
    public static void PartOne()
    {
        var lines = File.ReadLines("4/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var duplicatedWork = 0;
        foreach (var line in linesArray)
        {
            if (line == "") continue;
            var elfWork = line.Split(',');
            var elfOneSectors = GetWorkSectors(elfWork[0]);
            var elfTwoSectors = GetWorkSectors(elfWork[1]);

            if (elfOneSectors.Length < elfTwoSectors.Length)
            {
                if (elfOneSectors.Intersect(elfTwoSectors).Count() == elfOneSectors.Length)
                {
                    duplicatedWork++;
                }
            }
            else
            {
                if (elfTwoSectors.Intersect(elfOneSectors).Count() == elfTwoSectors.Length)
                {
                    duplicatedWork++;
                }
            }
        }

        Console.WriteLine($"Part One: {duplicatedWork}");
    }

    public static void PartTwo()
    {
        var lines = File.ReadLines("4/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var duplicatedWork = (
            from line in linesArray
            where line != ""
            select line.Split(',') into elfWork 
                let elfOneSectors = GetWorkSectors(elfWork[0])
                let elfTwoSectors = GetWorkSectors(elfWork[1])
                where elfOneSectors.Intersect(elfTwoSectors).Any()
                select elfOneSectors
            ).Count();

        Console.WriteLine($"Part Two: {duplicatedWork}");
    }
}
