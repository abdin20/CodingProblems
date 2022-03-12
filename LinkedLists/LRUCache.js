//double linked list node
var DLinkedList =function(key,value){
    this.key=key;
    this.value=value;
    this.prev=null;
    this.next=null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map= new Map();
    this.capacity=capacity;
    this.size=0;
    this.head=new DLinkedList();
    this.tail =new DLinkedList();
    
    this.head.next=this.tail;
    this.tail.prev=this.head;
    
};

//whenever adding node, add to head
LRUCache.prototype.addNode=function(node){
    node.prev=this.head;
    node.next=this.head.next;
    
    this.head.next.prev=node;
    this.head.next=node;
}

LRUCache.prototype.removeNode=function(node){
    prev = node.prev;
    next = node.next
    
    node.next.prev=prev;
    node.prev.next=next;
}




LRUCache.prototype.moveToHead=function(node){
    this.removeNode(node);
    this.addNode(node);
}

//return the last node in list
LRUCache.prototype.popTail=function(){
    
   let returnNode=this.tail.prev;
    
    this.removeNode(returnNode);
    
    return returnNode;
}



/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    if(this.map.has(key)){
        this.moveToHead(this.map.get(key))
        return this.map.get(key).value;
    }else{
        return -1
    }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    if(this.map.has(key)){
       let node=this.map.get(key)
        node.value=value
        this.moveToHead(node);
        this.map.set(key,node);
        
    }else{
       let node= new DLinkedList(key,value);
        this.addNode(node);
        this.map.set(key,node)
        this.size++;
        
        if(this.size>this.capacity){
            let lastItem=this.popTail();
            this.map.delete(lastItem.key);
            this.size--;
        }
    }  
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */