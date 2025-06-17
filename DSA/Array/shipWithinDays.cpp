class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        int maxWeight = INT_MIN, total = 0;
        for (int i = 0; i < weights.size(); i++) {
            maxWeight = max(maxWeight, weights[i]);
            total = total + weights[i];
        }
        while (maxWeight < total) {
            int mid = (maxWeight + total) / 2;
            int daysNeeded = 1, currentWeight = 0;
            for (int i = 0; i < weights.size(); i++) {
                if (currentWeight + weights[i] > mid) {
                    daysNeeded++; 
                    currentWeight = 0;
                }
                currentWeight += weights[i]; 
            }
            if (daysNeeded > days) {
                maxWeight = mid + 1;
            } else {
                total = mid;
            }
        }
        return maxWeight;
    }
};