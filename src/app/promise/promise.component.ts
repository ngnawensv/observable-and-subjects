import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

//Creating Student Promise
  studentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
      if (false) {
        resolve([
          { id: 1, name: 'Jerry' },
          { id: 2, name: 'Elaine' },
          { id: 3, name: 'George' },
        ])
      } else {
        reject('Failed to fetch data!')

      }
    }, 1000)

  })

  constructor() { }

  ngOnInit(): void {
    this.studentPromise.then(data => console.log("OK")).catch(err => console.log("KO"));

  }

}
