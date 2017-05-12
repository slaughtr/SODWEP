import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service'

declare var jQuery: any
declare var moment: any

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit {
  dogs: FirebaseListObservable<any[]>
  numDogs: number = 0


  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    //for header
    jQuery('#dogDaysSinceEstablished').text((moment().diff('2017-01-01', 'days'))*7)

    this.dogs = this.dbService.getDogs()

    //dog counter, there must be a better way
    this.dogs.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.numDogs++
      })
    })

  }



}
