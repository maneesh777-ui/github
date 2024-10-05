class Employee
{
    displayInfo()
    {
        console.log("hi this is display method")
    }
}
let emp=new Employee();
emp.displayInfo();




// class Employee
// {
//     constructor()
//     {
//      this.id=101;
//      this.ename="Ajay"
//     }
//     displayInfo()
//     {
//         console.log(this.id+" "+this.ename);
//     }
// }
// let emp=new Employee();
// emp.displayInfo();


// with constructor
// class Employee
// {
//     constructor(id,ename)
//     {
//      this.id=id;
//      this.ename=ename;
//     }
//     displayInfo()
//     {
//         console.log(this.id+" "+this.ename);
//     }
// }
// let emp=new Employee(1001,"rajesh");
// emp.displayInfo();



// without any constructor
// class Employee
// {
//     id=1001;
//     ename="vinay kumar";
//     displayInfo()
//     {
//         console.log(this.id+" "+this.ename);
//     }
// }
// let emp=new Employee();
// emp.displayInfo();