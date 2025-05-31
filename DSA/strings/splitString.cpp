class Solution {
public:
    int balancedStringSplit(string s) {
        int leftcnt =0,rightcnt=0,count=0;
        for(int i=0;i<s.length();i++){
            if(s[i]=='R'){
                rightcnt++;
            }else{
                leftcnt++;
            }
            if(rightcnt==leftcnt){
                count++;
                rightcnt=0;
                leftcnt =0;
            }
            
        }
        return count;
    }
};