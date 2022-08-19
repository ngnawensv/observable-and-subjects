import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  students:Student[]=[{
  id:12,
  name:'Samuel',
  surname:'Vermon'
  }]

  ngOnInit(): void {
  const interval$=interval(10000);
  interval$.subscribe(val=>console.log(val));

  }

}
