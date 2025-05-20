class Solution {
public:
    bool isZeroArray(vector<int>& nums, vector<vector<int>>& queries) {
        vector<int>deltaArray(nums.size()+1,0);
        for(const auto &query:queries){
            int left = query[0];
            int right = query[1];
            deltaArray[left]+=1;
            deltaArray[right+1]-=1;
        }
        vector<int>operationsCounts;
        int currentOperations = 0;
        for(int delta:deltaArray){
            currentOperations+=delta;
            operationsCounts.push_back(currentOperations);
        }
        for(int i=0;i<nums.size();i++){
            if(operationsCounts[i]<nums[i]){
                return false;
            }
        }
        return true;
    }
};
/* 
so here we used difference array which helps us to find how many times its gonna change when we add something or delete for each element in the array
we need to initialize the difference array size+1 to that of given array so that we can sum up with prefix and that  size +1 is to add the stop point where we do -1
we use prefix sum with this to solve the problem and check with the given nums array to find out whether it is possible to do array to all zeros or not

 */