namespace _2022._7;

public class TreeNode<T>
{
    public TreeNode<T>? Parent { get; private set; }
    
    private readonly List<TreeNode<T>> _children = new();

    private string Name { get; }
    private int Size { get; }

    public TreeNode(string name, int size)
    {
        Name = name;
        Size = size;
    }
    
    private string GetKey()
    {
        return (Parent?.Name) + "--" + Name;
    }
    
    // Get size of item and any children
    public int GetSize()
    {
        return Size + _children.Sum(child => child.GetSize());
    }

    // Create dictionary of directories to the sum of the sizes of their children
    public Dictionary<string, int> GetDirectoriesWithSizes()
    {
        Dictionary<string, int> directories = new() {  };

        foreach (var child in _children)
        {
            if (child.Size != 0 || directories.ContainsKey(child.GetKey())) continue;
            directories.Add(child.GetKey(), child.GetSize());
            child.GetDirectoriesWithSizes().ToList().Where(
                x => !directories.ContainsKey(x.Key)
            ).ToList().ForEach(
                x => directories.Add(x.Key, x.Value)
            );
        }

        return directories;
    }

    // Add a child node to the current node
    public void AddChild(TreeNode<T> node)
    {
        node.Parent = this;
        _children.Add(node);
    }
}
