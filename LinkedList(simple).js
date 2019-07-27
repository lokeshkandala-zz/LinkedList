class LinkedList{
  constructor(){
  this.head = null;
  }
  add(value){
   const newNode = { value, next: this.head };
   this.head = newNode;
   return this.head;
  }
  findAndRemove(val){
    if(val === this.head.value){
      this.head = this.head.next;
      return 'success';
    }else {
      let node = this.head.next;
      let prevNode = this.head;
      while(node) {
        if(node.value === val){
          prevNode.next = node.next;
          return 'success';
        }else {
          prevNode = node;
          node = node.next;
        }
      }
      return 'value not found';
    }
  }
}
