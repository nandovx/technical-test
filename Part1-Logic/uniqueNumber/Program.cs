using System;

class Program
{
    static void Main(string[] args)
    {
        if (args.Length == 0)
        {
            Console.WriteLine(
                "Please run with a argument like" +
            " 'dotnet run -- {your number list}'" +
            " if you have any doubts read the README");
            return;
        }

        List<int> numList = Preprocess(args[0]);
        UniqueNumberFinder(numList);
    }

    static List<int> Preprocess(string strList)
    {
        List<int> nums = strList
            .Split(',', StringSplitOptions.RemoveEmptyEntries)
            .Select(s => s.Trim())
            .Where(s => !string.IsNullOrEmpty(s))
            .Select(s => int.Parse(s))
            .ToList();

        nums.Sort();

        return nums;
    }

    static void UniqueNumberFinder(List<int> numList)
    {
        HashSet<int> uniqueNumbers = new HashSet<int>(numList);
        for (int i = 1; i < numList.Count; i++)
        {
            if (numList[i] == numList[i - 1])
            {
                uniqueNumbers.Remove(numList[i]);
            }
        }
        if (uniqueNumbers.Count == 0)
        {
            Console.WriteLine("All elements has been repeated");
            return;
        }
        Console.WriteLine(string.Join(", ", uniqueNumbers));
    }

}
