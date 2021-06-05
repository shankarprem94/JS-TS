class Employee{
	protected empID:number;
	protected empName:string;
	protected empSalary:number;
	constructor(id:number, name:string, salary:number){
		this.empID=id;
		this.empName=name;
		this.empSalary=salary;
	}
	Display(){
		console.log("Emp ID: "+this.empID+" Emp Name: "+this.empName+" and salary: "+this.empSalary);
	}
}

class Trainer extends Employee{
	protected subject:string;
	constructor(id:number, name:string, salary:number, subject:string){
		super(id, name, salary)
		this.subject=subject;
	}
	Display(){
		super.Display();
		console.log("Subject: "+this.subject);
	}
}

class Clerk extends Employee{
    protected department:string;
	constructor(id:number, name:string, salary:number, department:string){
		super(id, name, salary)
		this.department=department;
	}
	Display(){
		super.Display();
		console.log("Department: "+this.department);
	}
}

let obj1:Trainer=new Trainer(1,'Prem',123455,'Angular');
obj1.Display();

let obj2:Trainer=new Trainer(1,'Prem',123455,'IT');
obj2.Display();

let obj3:Employee=new Employee(1,'Prem',123455);
obj3.Display();