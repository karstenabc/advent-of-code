namespace _2022._2;

public static class Solution
{
    private const int ScoreForWin = 6;
    private const int ScoreForDraw = 3;
    private const int ScoreForLoss = 0;

    private static readonly Dictionary<char, int> MoveScores = new Dictionary<char, int>()
    {
        ['A'] = 1, // Rock
        ['X'] = 1,
        ['B'] = 2, // Paper
        ['Y'] = 2,
        ['C'] = 3, // Scissors
        ['Z'] = 3
    };

    private static int GamePoints(char opponentChoice, char playerChoice)
    {
        // Draw
        if (MoveScores[opponentChoice] == MoveScores[playerChoice])
        {
            return ScoreForDraw + MoveScores[playerChoice];
        }
        // Win unless rock and scissors played
        if (MoveScores[playerChoice] > MoveScores[opponentChoice])
        {
            // Rock and scissors were played
            if (MoveScores[playerChoice] + MoveScores[opponentChoice] == 4)
            {
                // Player won with rock against scissors
                if (MoveScores[playerChoice] == 1)
                {
                    return ScoreForWin + MoveScores[playerChoice];
                }
                return ScoreForLoss + MoveScores[playerChoice];
            }
            return ScoreForWin + MoveScores[playerChoice];
        }
        // Loss unless rock and scissors played
        if (MoveScores[playerChoice] + MoveScores[opponentChoice] != 4)
            return ScoreForLoss + MoveScores[playerChoice];
        // Player won with rock against scissors
        if (MoveScores[playerChoice] == 1)
        {
            return ScoreForWin + MoveScores[playerChoice];
        }
        return ScoreForLoss + MoveScores[playerChoice];
    }

    public static void PartOne()
    {
        var lines = File.ReadLines("2/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();

        var score = (
            from line in linesArray
            where line.Length > 0
            select line.Split(" ")
                into play
                select GamePoints(Convert.ToChar(play[0]), Convert.ToChar(play[1]))
            ).Sum();
        Console.WriteLine($"Part One: {score}");
    }

    public static void PartTwo()
    {
        var lines = File.ReadLines("2/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();
        
        var winMap = new Dictionary<char, char>()
        {
            ['A'] = 'Y', // Rock
            ['B'] = 'Z', // Paper
            ['C'] = 'X', // Scissors
        };
        
        var loseMap = new Dictionary<char, char>()
        {
            ['A'] = 'Z', // Rock
            ['B'] = 'X', // Paper
            ['C'] = 'Y', // Scissors
        };

        var score = (from line in linesArray
            select line.Split(" ")
            into play
            let playerChoice = Convert.ToChar(play[1]) switch
            {
                'X' => loseMap[Convert.ToChar(play[0])],
                'Z' => winMap[Convert.ToChar(play[0])],
                _ => Convert.ToChar(play[0])
            }
            select GamePoints(Convert.ToChar((string)play[0]), playerChoice)).Sum();

        Console.WriteLine($"Part Two: {score}");
    }
}
