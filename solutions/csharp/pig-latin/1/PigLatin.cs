using System;
using System.Text.RegularExpressions;

public static class PigLatin
{
    private static string TranslateWord(string word)
    {
        if (Regex.IsMatch(word, "^[aeiouAEIOU]|^xr|^yt")) {
            return word + "ay";
        }
        Match rule3 = Regex.Match(word, "^[^aeiouAEIOU]*qu");
        if (rule3.Success) {
            string prefix = rule3.Value;
            string rest = word.Substring(prefix.Length);
            return rest + prefix + "ay";
        }
        Match rule4 = Regex.Match(word, "^([^aeiouAEIOU]+)y");
        if (rule4.Success) {
            string prefix = rule4.Groups[1].Value;
            string rest = word.Substring(prefix.Length);
            return rest + prefix + "ay";
        }
        Match rule2 = Regex.Match(word, "^[^aeiouAEIOU]+");
        if (rule2.Success) {
            string prefix = rule2.Value;
            string rest = word.Substring(prefix.Length);
            return rest + prefix + "ay";
        }
        return word + "ay";        
    }

    public static string Translate(string phrase)
    {
        string[] words = phrase.Split(' ');
        string result = "";
        foreach (string word in words) {
            result += TranslateWord(word) + " ";
        }
        return result.TrimEnd();
    }
}