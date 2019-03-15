import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add.student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.scss'],
})
export class AddStudentComponent implements OnInit {
student={rollno:0,firstName:"",lastName:"",DOB:"",subject:"value",teacher:"",address:""}
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() { 
  }

  addStudent(student) {
    this.studentService.addStudent(student);
    student = this.studentService.getStudents();
    this.router.navigate(['/list-student']);
  
}

}
