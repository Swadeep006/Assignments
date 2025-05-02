class Node {
    public:
        int val;
        Node* next;
        Node(int data) {
            this->val = data;
            this->next = NULL;
        }
    };
    class MyLinkedList {
    public:
        Node* head;
        MyLinkedList() { head = NULL; }
        int length() {
            int count = 0;
            Node* temp = head;
            while (temp != NULL) {
                count++;
                temp = temp->next;
            }
            return count;
        }
        int get(int k) {
            int len = length();
            if (head == NULL)
                return -1;
            else if (len < k)
                return -1;
            else {
                int count = 0;
                Node* temp = head;
                while (count < k) {
                    temp = temp->next;
                    count++;
                }
                if (temp == NULL)
                    return -1;
                return temp->val;
            }
        }
    
        void addAtHead(int value) {
            Node* new_node = new Node(value);
            new_node->next = head;
            head = new_node;
        }
    
        void addAtTail(int value) {
            Node* new_node = new Node(value);
            if (head == NULL) {
                head = new_node;
            } else {
                Node* temp = head;
                while (temp->next != NULL) {
                    temp = temp->next;
                }
                temp->next = new_node;
            }
        }
    
        void addAtIndex(int k, int value) {
            Node* new_node = new Node(value);
            if (k == 0) {
                addAtHead(value);
            } else {
                int count = 0;
                Node* temp = head;
                while (temp != NULL && count < k - 1) {
                    temp = temp->next;
                    count++;
                }
                if (temp == NULL)
                    return;
                Node* right = temp->next;
                temp->next = new_node;
                new_node->next = right;
            }
        }
    
        void deleteAtIndex(int k) {
            if (head == NULL)
                return;
            else if (k == 0) {
                Node* del = head;
                head = head->next;
                delete del;
            } else {
                int count = 0;
                Node* temp = head;
                while (count < k - 1) {
                    temp = temp->next;
                    count++;
                }
                if (temp == NULL || temp->next == NULL)
                    return;
                Node* del = temp->next;
                temp->next = temp->next->next;
                delete del;
            }
        }
    };