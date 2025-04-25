/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
 class Solution {
    public:
        int length(ListNode* head) {
            int count = 0;
            ListNode* temp = head;
            while (temp != NULL) {
                count++;
                temp = temp->next;
            }
            return count;
        }
        ListNode* middleNode(ListNode* head) {
            int len = length(head) / 2;
            int count = 0;
            ListNode* temp = head;
            while(count!=len){
                temp=temp->next;
                count++;
            }
            return temp;
        }
    };