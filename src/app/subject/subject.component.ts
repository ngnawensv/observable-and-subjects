import { Component, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Student } from '../models/student';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  //Crating Student Subject
  studentSubject = new Subject<Student>();

  //Crating Student[] Subject
  studentsSubject = new Subject<Student[]>();

  
  student1:Student={id:12,
    name:'Samuel',
    surname:'Vermon'
    }

  students: Student[] = [
    {
      id: 1,
      name: 'Studant_Name 1',
      surname: 'Student_Surname 1'
    },{
      id: 2,
      name: 'Studant_Name 2',
      surname: 'Student_Surname 2'
    },{
      id: 3,
      name: 'Studant_Name 3',
      surname: 'Student_Surname 3'
    },{
      id: 4,
      name: 'Studant_Name 4',
      surname: 'Student_Surname 4'
    },{
      id: 5,
      name: 'Studant_Name 5',
      surname: 'Student_Surname 5'
    },{
      id: 6,
      name: 'Studant_Name 6',
      surname: 'Student_Surname 6'
    },{
      id: 7,
      name: 'Studant_Name 7',
      surname: 'Student_Surname 7'
    },{
      id: 8,
      name: 'Studant_Name 8',
      surname: 'Student_Surname 8'
    },{
      id: 9,
      name: 'Studant_Name 9',
      surname: 'Student_Surname 9'
    },{
      id: 10,
      name: 'Studant_Name 10',
      surname: 'Student_Surname 10'
    },
  ]

  constructor() { }

  ngOnInit(): void {

    this.studentSubject.subscribe(student => console.log("received: ", student));
    this.managerStudent();
    this.studentSubject.next(this.student1);
  }

  managerStudent(): void{
    this.studentSubject.asObservable().pipe(map(student=>student.name)).subscribe(studentName => console.log("received: ", studentName));
  }

}
