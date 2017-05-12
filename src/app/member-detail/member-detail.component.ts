import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from "@angular/router";

import { DatabaseService } from '../database.service'

declare var jQuery: any

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  dogId: string
  dog: any

  constructor(private route: ActivatedRoute, private location: Location, private dbService: DatabaseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.dogId = urlParameters['id']
    });
    this.dog = this.dbService.getDogById(this.dogId).subscribe(dog => {
      this.dog = dog
    })

  }

}
