
//setting getter and setter
class EmployeePayrollData{
    get id(){return this._id;}
    set id(id){return this._id}    

    get name(){return this._name;}
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.text(name))
        {
        this._name=name;
        }
        else throw 'Name is incorrect.';
    }

    get profilePic() {return this._profilePic;}
    set profilePic(profilePic){
        this._profilePic=profilePic;
    }

    get gender(){return this._gender;}
    set gender(gender){
        this._gender=gender;
    }

    get department(){return this._department;}
    set department(department){
        this._department=department;
    }

    get salary(){return this._salary;}
    set salary(salary){
        this._salary=salary;
    }

    get note(){return this._notes;}
    set note(note){
        this._notes=note;
    }

    get startDate(){return this._startDate;}
    set startDate(startDate)
    {
        this._startDate=startDate;
    }

    toString(){
        const options={year:'numeric', month:'long',day:'numeric'};
        const empDate=!this.startDate?"undefine":this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+",Name="+this.name+",Gender="+this.gender+",profilePic"+this.profilePic+",department"+this.department+",salary"+this.salary+",startDate"+this.startDate+",note="+this.note ;
    }
}



//js UC-1
window.addEventListener('DOMContentLoaded',()=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            //employeePayrollDatais class for getter and setter
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
});
