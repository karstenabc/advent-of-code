namespace _2022._5;

public static class Solution
{
    private static int _columnCount = 0;
    private static int _rowCount = 0;
    private static readonly Dictionary<int, List<char>> Columns = new Dictionary<int, List<char>>();

    // Determine column and row counts
    private static void GetRowColCounts(IReadOnlyList<string> linesArray)
    {
        for (var i = 0; i < linesArray.Count; i++)
        {
            if (linesArray[i].Length <= 0 || linesArray[i][1] != '1') continue;
            _columnCount = Convert.ToInt32(linesArray[i][linesArray[i].Length - 2].ToString());
            _rowCount = i;
            break;
        }
    }

    // Create mapping from column number to list of crates
    private static void MapColumns(IReadOnlyList<string> linesArray)
    {
        for (var col = 0; col < _columnCount; col++)
        {
            var crateLoc = (col * 4) + 1;
            for (var row = _rowCount - 1; row >= 0; row--)
            {
                var crateLetter = linesArray[row][crateLoc].ToString();
                if (crateLetter is "" or " ") continue;
                if (Columns.ContainsKey(col + 1))
                {
                    Columns[col + 1].Add(Convert.ToChar(crateLetter));
                }
                else
                {
                    Columns.Add(col + 1, new List<char> { Convert.ToChar(crateLetter) });
                }
            }
        }
    }

    // Get top crate from each column
    private static string GetTopCrates()
    {
        return Columns.Keys.Aggregate(
            "",
            (current, colNumber) => current + Columns[colNumber].Last()
        );
    } 
    public static void PartOne()
    {
        var lines = File.ReadLines("5/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();
        GetRowColCounts(linesArray);
        MapColumns(linesArray);
        
        // Parse and complete instructions
        for (var row = _rowCount + 2; row < linesArray.Length; row++)
        {
            var instructionParts = linesArray[row].Split(' ');
            var cratesToMove = Convert.ToInt32(instructionParts[1]);
            var colSource = Convert.ToInt32(instructionParts[3]);
            var colDestination = Convert.ToInt32(instructionParts[5]);
        
            for (var i = 0; i < cratesToMove; i++)
            {
                Columns[colDestination].Add(Columns[colSource].Last());
                Columns[colSource].RemoveAt(Columns[colSource].Count - 1);
            }
        }
        
        Console.WriteLine($"Part One: {GetTopCrates()}");
    }

    public static void PartTwo()
    {
        var lines = File.ReadLines("5/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();
        GetRowColCounts(linesArray);
        MapColumns(linesArray);

        // Parse and complete instructions
        for (var row = _rowCount + 2; row < linesArray.Length; row++)
        {
            var instructionParts = linesArray[row].Split(' ');
            var cratesToMove = Convert.ToInt32(instructionParts[1]);
            var colSource = Convert.ToInt32(instructionParts[3]);
            var colDestination = Convert.ToInt32(instructionParts[5]);

            // Move last x crates to destination
            var movingCrates = Columns[colSource].Skip(Columns[colSource].Count - cratesToMove).ToList();
            var destination = Columns[colDestination].Concat(movingCrates).ToList();
            Columns[colDestination] = destination;

            // Remove last x crates from source
            for (var i = 0; i < cratesToMove; i++)
            {
                Columns[colSource].RemoveAt(Columns[colSource].Count - 1);
            }
        }

        Console.WriteLine($"Part Two: {GetTopCrates()}");
    }
}
