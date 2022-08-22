import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

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

//Creating Students Promise
  studentsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.students)
    }, 1000) //emit the students liste after 1 seconde

  })

  constructor() { }

  ngOnInit(): void {
    this.studentsPromise.then(students => console.log('Students List', students)).catch(err => console.log("KO"));

  }

}
