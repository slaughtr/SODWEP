import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms"
import { Router } from "@angular/router"

import { DatabaseService } from '../database.service'
import { Dog } from '../dog.model'

declare var jQuery: any

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})

export class MemberEditComponent implements OnInit {
  dogId: string
  dog: Dog
  dogEditForm: FormGroup

  constructor(private route: ActivatedRoute, private location: Location, private dbService: DatabaseService, private router: Router, private form: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.dogId = urlParameters['id']
      this.getDogToEdit()
    })
    // this.dbService.getDogById(this.dogId).subscribe(foundDog => {
    //   this.dog = foundDog
    // })
  }

  getDogToEdit() {
    this.dbService.getDogById(this.dogId).subscribe(selectedDog => {
      this.dog = selectedDog
      this.dogEditForm = this.form.group({
        name: ['', Validators.required],
        breed: ['', Validators.required],
        age: ['', Validators.required],
        location: ['', Validators.required],
        bio: ['', Validators.required],
        imageURL: ['', Validators.required]
      })
      // this.populateEditForm()
    })
  }

  // populateEditForm() {
  //   console.log(this.dog)
  //   this.dogEditForm.reset({
  // //     name: this.dog.name,
  // //     // breed: this.dog.breed,
  // //     // age: this.dog.age,
  // //     // location: this.dog.location,
  // //     // bio: this.dog.bio,
  // //     // imageURL: this.dog.imageURL
  //   })
  // }

}
