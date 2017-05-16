# SODWEP (Society of Dogs Who Eat Poop)

#### _{5-12-2017}_

#### By _**{Dallas Slaughter}**_

A place for the highest members of society to gather and discuss the finer points of eating poop. Featuring Society management, member info, and a discussion board.

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.
* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Running / Development
======

* You will first need to create a Firebase app at [Firebase](https://firebase.google.com). You will use information from that app (click on 'Add Firebase to your web app' in the Overview panel for needed values) in the `api-keys.ts` (not provided, you will have to create) file as detailed below.
* Add file `app/api-keys.ts` with following (change the values such as YOUR_API_KEY to those provided by firebase)
```
export var masterFirebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  storageBucket: YOUR_STORAGE_BUCKET
}
```

* firebase database rules should be set to
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


Creating This App
======

Beginning Expectations
------

#### User Stories
* ~~As a user, I'd like to visit a page to see a list of all team or club members.~~
* ~~As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.~~
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* ~~As a user, I'd like all data persisted in a database, so it's always there when I need it.~~
* ~~As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category. (For instance, a club may have a treasurer, president, and/or secretary. A sports team may have a goalie, forward, or striker, a book club may have founders and attendees. You're also welcome to filter by something other than role, if it's more relevant to your project.)~~
* ~~As an administrator, I want to add new users to the club. (User authentication is not required).~~
* ~~As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.~~
* ~~As an administrator, need the option to delete a user, in case they leave the club or team.~~

Further Exploration
------
* ~~Add functionality to keep track of stats, if relevant. Is your roster for a sports club? Keep track of the individual players' scoring percentage. An extracurricular course or seminar? Keep track of attendance or grades. A hiking group? Keep track of the number of miles each person has hiked with the club, etc.~~
* Add a message board area, where club members may chat with each other.
* Include an area called "announcements", "events", "games", etc. where users can post what events, matches, or meetings the club has planned.
* Deploy your application. Include a link to the live site in your project's README.
* Consider implementing AngularFire/Firebase user authentication (Note that this goes beyond the scope of our curriculum, and will require you to complete outside research. Begin with the AngularFire documentation on User Authentication.)
* Anything else that would be relevant to the group your application manages!

General Objectives
------
* ~~Components are used to create display and behavior for templates.~~
* ~~A router is used to navigate between different pages, including at least one dynamic route.~~
* ~~A service shares data between multiple components.~~
* ~~Application can create, edit, and delete instances of a model, persisting all changes in Firebase.~~
* ~~Data is retrieved from Firebase and displayed in the application.~~
* ~~Models can be filtered using a custom pipe.~~

---

## Beginning Plan

#### Dev
1. ~~Create Project~~
2. ~~Create Readme~~
3. Create Model(s)
4. ~~Prepopulate datas.json, upload to Firebase~~
5. Create Components
  * ~~Member list~~
  * ~~Member detail~~
  * Discussion board (probably several components needed here, lower priority)
  * ~~Member new~~
  * ~~Member edit~~
6. Router
  * About page
  * Discussion board
7. Create some kind of admin portal/button
  * Firebase auth?
8. Event? component
9. Pipes
  * ~~Filter by role~~
  * ~~Filter by age~~
  * Filter by joined?

#### Styling
* ~~Use materialize (duh)~~ (Used Bulma instead)
  * ~~Nav bar~~ (Nav panel, stats bar instead)
  * Breadcrumbs
  * ~~Cards for member list~~
  * Collections for discussion board?
  * ~~Use a footer this time!~~
* All black and white (dogs are supposedly colorblind)~~


#### Dreams
* Bark/English options
