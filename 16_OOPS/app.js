
           ///THSI IS THE OLD WAY
// function Student(name,age,marks){
//     this.name=name;
//     this.age=age;

//     personalbar.prototype.talk=function(){
//         console.log(`Hi, my name is ${this.name}`);
        
//     }
// }
// let stu1=new Student("adam",25,95)



      //THIS IS NEW WAY ES6
class Student{
    
    constructor(name,age,marks){
        this.name=name;
        this.marks=marks;
        this.age=age;
    }

    talk(){
        console.log(`Hi I am ${name}`);
        
    }
}

let stu1=new Student("adam",25,95);
