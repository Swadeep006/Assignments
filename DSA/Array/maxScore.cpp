class Solution {
public:
    int maxScore(vector<int>& nums) {
        vector<long long>prefix(nums.size());
        sort(nums.begin(), nums.end(),greater<int>());
        prefix[0] = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            prefix[i] = prefix[i - 1] + nums[i];
        }
        int count =0;
        for(int i=0;i<prefix.size();i++){
            if(prefix[i]>0){
                count++;
            }else{
                break;
            }
            
        }
        return count;
    }
};