class Solution {
public:
    int pivotInteger(int n) {
        int total = 0;
        for (int i = 1; i <= n; i++) {
            total += i;
        }
        int leftsum = 0;
        for (int i = 1; i <= n; i++) {
            int rightsum = total - leftsum - i;
            if (leftsum == rightsum) {
                return i;
            }
            leftsum += i;
        }
        return -1;
    }
};