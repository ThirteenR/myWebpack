class Person{
    constructor(name,sxe,age){
        this.name = name;
        this.sex = sxe;
        this.age = age;
    }
    say(){
        return "My name is "+this.name;
    }
    eat(){
        return "I am eating.";
    }
}
class Worker extends Person{
    constructor(name,sex,age,job){
        super(name,sex,age);
        this.job = job;
    }
    work(){
        return "I am working "+this.job;
    }
}
let Factory = {
    creator : function (name,sex,age,job) {
        return new Worker(name,sex,age,job);
    }
}
export default Factory;