import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DatabaseService } from '../database.service'

declare var jQuery: any
declare var moment: any

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  dogs: FirebaseListObservable<any[]>


  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.dogs = this.dbService.getDogs()
  }

}
