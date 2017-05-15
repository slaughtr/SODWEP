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
  editModalShowing: boolean = false
  deleteModalShowing: boolean = false


  constructor(private route: ActivatedRoute, private location: Location, private dbService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.dogId = urlParameters['id']
      this.dbService.getDogById(this.dogId).subscribe(foundDog => {
        this.dog = foundDog
    })
    })
    jQuery('.editModal').hide()
    jQuery('.deleteModal').hide()
  }

  toggleEditModal() {
    if (!this.editModalShowing) {
      this.editModalShowing = true
      jQuery('.editModal').show()
    } else {
      this.editModalShowing = false
      jQuery('.editModal').hide()
    }
  }

  toggleDeleteModal() {
    if (!this.deleteModalShowing) {
      this.deleteModalShowing = true
      jQuery('.deleteModal').show()
    } else {
      this.deleteModalShowing = false
      jQuery('.deleteModal').hide()
    }
  }

  deleteDog(dog) {
    this.dbService.deleteDog(dog)
    this.toggleDeleteModal()
    this.router.navigate(['members'])
  }

}
