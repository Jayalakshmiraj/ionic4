import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.student',
  templateUrl: './list.student.component.html',
  styleUrls: ['./list.student.component.scss'],
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentService,private router:Router) { }

  ngOnInit() {
    
  }
  students = this.studentService.getStudents();

  deleteStudent(rollno){
    this.studentService.deleteStudent(rollno)
  }
deleteAllStudent(){
  this.students=[];
}

editStudent(student){
  this.router.navigate(['/edit-student/'+student.rollno]);
    }
}
