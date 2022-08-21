import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Student } from '../models/student';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {

    //Creating Student Observable
    const studentObservable$ = new Observable<Student>(observer => {
      observer.next(this.student1);
      observer.next(this.students[0]);
      setTimeout(() => observer.next(this.students[1]), 1000);
      setTimeout(() => observer.next(this.students[0]), 10000);
    });

    console.log("before subscribe on studentObservable$");
    const observer = studentObservable$.subscribe((student) => console.log("received: ", student));
    console.log("after subscribe on studentObservable$");

    
    //Creating Student[] Observable
    const studentsObservable$ = new Observable<Student[]>(observer => {
      observer.next(this.students);
    });

    console.log("before subscribe on studentsObservable$");
    const observerStudents = studentsObservable$.subscribe((students) => console.log("received: ", students));
    console.log("after subscribe on studentsObservable$");

  }

}
