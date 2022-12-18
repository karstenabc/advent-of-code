namespace _2022._6;

public static class Solution
{
    private const string Buffer = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

    // Return position of the index the first unique sequence of characters of a given length
    private static int GetFirstBufferIndex(int bufferLength)
    {
        var rollingBuffer = new List<char>();
        for (var i = 0; i < Buffer.Length; i++)
        {
            if (rollingBuffer.Count == bufferLength)
            {
                rollingBuffer.RemoveAt(0);
            }
            rollingBuffer.Add(Buffer[i]);
            
            var rollingBufferSet = new HashSet<char>( rollingBuffer );
            if (rollingBufferSet.Count == bufferLength)
            {
                return i + 1;
            }
        }

        return -1;
    }
    
    public static void PartOne()
    {
        Console.WriteLine($"Part One: {GetFirstBufferIndex(4)}");
    }

    public static void PartTwo()
    {
        Console.WriteLine($"Part Two: {GetFirstBufferIndex(14)}");
    }
}
