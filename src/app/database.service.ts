import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'


@Injectable()
export class DatabaseService {
  dogs: FirebaseListObservable<any[]>

  constructor(private db: AngularFireDatabase) {
    this.dogs = db.list('/dogs')
   }

   getDogs() {
     return this.dogs
   }

   getDogById(dogId: string) {
     return this.db.object('/dogs/'+dogId)
   }

   editDog(dogId: string, dogToEdit) {
     this.dogs.update(dogId, dogToEdit)
   }
}
