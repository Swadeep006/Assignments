class Solution {
public:
    string reversePrefix(string word, char ch) {
        stack<char>ans;
        string result = "";
        int i=0;
        while(i<word.length() && word[i]!=ch){
            ans.push(word[i]);
            i++;
        }
        if(i==word.length()) return word;
        ans.push(word[i]);
        i++;
        while(!ans.empty()){
            result+=ans.top();
            ans.pop();
        }
        while(i<word.length()){
            result+=word[i];
            i++;
        }
        return result;

    }
};