void selectionSort(vector<vector<int>>& boxTypes){
    int n = boxTypes.size();
    for(int i=0;i<n-1;i++){
        int maxIndex = i;
        for(int j=i+1;j<n;j++){
            if(boxTypes[j][1] > boxTypes[maxIndex][1]){
                maxIndex = j;
            }
        }
        if(maxIndex != i){
            swap(boxTypes[i],boxTypes[maxIndex]);
        }
    }
}
class Solution {
public:
    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
        selectionSort(boxTypes);
        int ans = 0;
        for(auto box:boxTypes){
            int numBoxes = box[0];
            int unitsPerBox = box[1];

            int boxToTake = min (truckSize, numBoxes);
            ans +=boxToTake*unitsPerBox;
            truckSize -= boxToTake;

            if(truckSize ==0) break;
        }
        return ans;
    }
};