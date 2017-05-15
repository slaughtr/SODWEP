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
  selector: 'app-member-new',
  templateUrl: './member-new.component.html',
  styleUrls: ['./member-new.component.css']
})

export class MemberNewComponent implements OnInit {
  newDogForm: FormGroup

  modalShowing: boolean = false


  constructor(private route: ActivatedRoute, private location: Location, private dbService: DatabaseService, private router: Router, private form: FormBuilder) { }

  ngOnInit() {
    this.newDogForm = this.form.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', Validators.required],
      location: ['', Validators.required],
      bio: ['', Validators.required],
      imageURL: ['', Validators.required]
    })
    jQuery('.modal').hide()
  }

  submitNew() {
    var newDog: Dog = Object.assign({}, this.newDogForm.value)
    this.dbService.newDog(newDog)
    this.toggleNewModal()
  }

  toggleNewModal() {
    if (!this.modalShowing) {
      this.modalShowing = true
      jQuery('.modal').show()
    } else {
      this.modalShowing = false
      jQuery('.modal').hide()
    }
  }

}
