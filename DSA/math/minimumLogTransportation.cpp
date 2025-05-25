class Solution {
public:
    long long minCuttingCost(int n, int m, int k) {
        if(n==0 || m==0 || k==0) return 0;
        if(k>=n && k>=m) return 0;
        long  cost = 0;
        if(m>k && n<=k){
            cost +=(long)(m-k)*k;
        }
        if(n>k && m<=k){
            cost +=(long)(n-k)*k;
        }
        return cost;
        
    }
};