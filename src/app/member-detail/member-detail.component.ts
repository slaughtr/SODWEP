import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from "@angular/router";

import { DatabaseService } from '../database.service'
import { Dog } from '../dog.model'

declare var jQuery: any

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  dogId: string
  dog: Dog
  modalShowing: boolean = false


  constructor(private route: ActivatedRoute, private location: Location, private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.dogId = urlParameters['id']
      this.dbService.getDogById(this.dogId).subscribe(foundDog => {
        this.dog = foundDog
    })
    })
    jQuery('.modal').hide()
  }

  toggleEditModal() {
    if (!this.modalShowing) {
      this.modalShowing = true
      jQuery('.modal').show()
    } else {
      this.modalShowing = false
      jQuery('.modal').hide()
    }
  }

}
