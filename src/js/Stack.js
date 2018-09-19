class Stack{
    constructor(){
        this.space = [];
    }
    undo(){

    }
    redo(){

    }
    add(a){
         this.space.push(a);
    }
    clear(){
        this.space = [];
    }

}
export default   Stack;