import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit.student',
  templateUrl: './edit.student.component.html',
  styleUrls: ['./edit.student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }

  rollno: number;
  private sub: any;
  student={rollno:0,firstName:"",lastName:"",DOB:"",subject:"value",teacher:"",address:""}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.rollno = +params['rollno']; // (+) converts string 'id' to a number
      console.log("Roll No is " + this.rollno);
      this.student = this.studentService.getStudentByRollNo(this.rollno);

      // In a real app: dispatch action to load the details here.
    });
  }
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['/list-student']);
  }
}
