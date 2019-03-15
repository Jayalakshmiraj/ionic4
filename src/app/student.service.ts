import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students=[];
// students = [
// {rollno:1,firstName:"jaya",lastName:"lakshmi",DOB:"03/14/19",subject:"english",teacher:"tamil",address:"hsr"},
// {rollno:2,firstName:"mala",lastName:"devi",DOB:"04/15/19",subject:"tamil",teacher:"maths",address:"main road"},
// {rollno:3,firstName:"kala",lastName:"devi",DOB:"05/16/19",subject:"english",teacher:"maths",address:"hsr"},
// {rollno:4,firstName:"ragu",lastName:"kumar",DOB:"06/17/19",subject:"tamil",teacher:"math",address:"hsr"}]

// student={rollno:0,firstName:"",lastName:"",DOB:"",subject:"value",teacher:"",address:""}

  constructor() {
    var defaultStudents= [
      {rollno:1,firstName:"jaya",lastName:"lakshmi",DOB:"03/14/19",subject:"english",teacher:"tamil",address:"hsr"},
      {rollno:2,firstName:"mala",lastName:"devi",DOB:"04/15/19",subject:"tamil",teacher:"maths",address:"main road"},
      {rollno:3,firstName:"kala",lastName:"devi",DOB:"05/16/19",subject:"english",teacher:"maths",address:"hsr"},
      {rollno:4,firstName:"ragu",lastName:"kumar",DOB:"06/17/19",subject:"tamil",teacher:"math",address:"hsr"}];

    if(localStorage.getItem('students')==null)
    {
      this.students = defaultStudents;
      localStorage.setItem('students', JSON.stringify(this.students));
    }
    else{
      this.students = JSON.parse(localStorage.getItem('students'));
    }
   }

   getStudents(){
    
    return this.students;
  }

  getStudentByRollNo(rollno){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno==rollno){
        return this.students[i];
        break;
      }
    }

  }
  addStudent(student){
  student.rollno = Math.round(Math.random()*1000000);
   this.students.push(student);
   localStorage.setItem('customers',JSON.stringify(this.students));
  }
  deleteStudent(rollno){

    for(var i=0;i<this.students.length;i++){
      if(rollno==this.students[i].rollno){
        this.students.splice(i,1)
        localStorage.setItem('customers',JSON.stringify(this.students));
      }

    }

  }

  updateStudent(student){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno==student.rollno){
       this.students[i]=student;
        break;
      }
    }
    localStorage.setItem('customers',JSON.stringify(this.students));
  }
}
