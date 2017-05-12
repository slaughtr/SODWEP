import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { MaterializeModule } from 'angular2-materialize'

import { DatabaseService } from './database.service'
import { routing } from './app.routing';

import { AppComponent } from './app.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { MemberListComponent } from './member-list/member-list.component'
import { MemberDetailComponent } from './member-detail/member-detail.component'

import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
