class Person{
    
    constructor(name,age){
        console.log("person class constructed");
        
        this.name=name;
        this.age=age;
        
    }

    talk(){
        console.log(`Hi I am ${this.name}`);
        
    }
}
class Student extends Person{
    
    constructor(name,age,marks){
        console.log("Student class constructed");
        super(name,age);//parent class construcetd is being called
        this.marks=marks;
    }

}
class Teacher extends Person{
    
    constructor(name,age,subject){
        console.log("teacher class constructed");
        super(name,age);//parent class construcetd is being called
        this.subject=subject;
    }

   
}
