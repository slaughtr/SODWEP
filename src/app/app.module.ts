import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import * as moment from 'moment';

import { DatabaseService } from './database.service'
import { routing } from './app.routing';

import { AppComponent } from './app.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { MemberListComponent } from './member-list/member-list.component'
import { MemberDetailComponent } from './member-detail/member-detail.component'

import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MemberEditComponent } from './member-edit/member-edit.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberDetailComponent,
    WelcomePageComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
