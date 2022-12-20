namespace _2022._7;

public static class Solution
{
    private static readonly TreeNode<string> RootNode = new("/", 0);
    private static TreeNode<string> _currentNode = RootNode;
    private static bool _listingFiles;

    // Create file tree structure from root node
    private static void CreateDirectoryStructure()
    {
        var lines = File.ReadLines("7/input.txt");
        var linesArray = lines as string[] ?? lines.ToArray();
        
        foreach (var command in linesArray)
        {
            if (IsCommand(command))
            {
                ParseCommand(command);
            }
            else if (_listingFiles)
            {
                ParseOutput(command);
            }
        }
    }

    private static bool IsCommand(string command)
    {
        return command.StartsWith('$');
    }

    private static void ParseCommand(string command)
    {
        var cmd = command.Split(' ');
        switch (cmd[1])
        {
            case "cd":
                _listingFiles = false;
                // Root node already created
                if (cmd[2] != "/")
                {
                    if (cmd[2] == "..")
                    {
                        // Move up a directory
                        var parentNode = _currentNode.Parent;
                        if (parentNode != null) _currentNode = parentNode;
                    }
                    else
                    {
                        // Add new directory
                        var newDirectory = new TreeNode<string>(cmd[2], 0);
                        _currentNode.AddChild(newDirectory);
                        _currentNode = newDirectory;
                    }
                }
                break;
            case "ls":
                _listingFiles = true;
                break;
        }
    }

    private static void ParseOutput(string command)
    {
        var output = command.Split(' ');
        if (output[0] == "dir") return;
        var newFile = new TreeNode<string>(output[1], Convert.ToInt32(output[0]));
        _currentNode.AddChild(newFile);
    }

    public static void PartOne()
    {
        CreateDirectoryStructure();
        const int maxDirectorySize = 100000;
        var directorySizes = RootNode.GetDirectoriesWithSizes();
        var directorySize = directorySizes.Values.Where(dirSize => dirSize <= maxDirectorySize).Sum();

        Console.WriteLine($"Part One: {directorySize}");
    }

    public static void PartTwo()
    {
        const int filesystemSize = 70000000;
        const int requiredSize = 30000000;
        var unusedSize = filesystemSize - RootNode.GetSize();
        var deleteSize = requiredSize - unusedSize;
        var directorySizes = RootNode.GetDirectoriesWithSizes();
        var sizeToDelete = directorySizes.Where(
            directory => directory.Value >= deleteSize
        ).Min(directory => directory.Value);
        
        Console.WriteLine($"Part Two: {sizeToDelete}");
    }
}
