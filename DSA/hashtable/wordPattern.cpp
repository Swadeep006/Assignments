class Solution {
public:
    bool wordPattern(string pattern, string s) {
        vector<string> v;
        string str = "";
        for (int i = 0; i < s.size(); i++) {
            if (s[i] != ' ')
                str += s[i];
            else {
                v.push_back(str);
                str = "";
            }
        }
        v.push_back(str);
        if (pattern.size() != v.size())
            return false;
        unordered_map<char, string> mp1;
        unordered_map<string, char> mp2;
        for (int i = 0; i < pattern.size(); i++) {
            if (mp1.find(pattern[i]) == mp1.end())
                mp1[pattern[i]] = v[i];
            if (mp2.find(v[i]) == mp2.end())
                mp2[v[i]] = pattern[i];
            if (mp1[pattern[i]] != v[i] || mp2[v[i]] != pattern[i])
                return false;
        }
        return true;
    }
};