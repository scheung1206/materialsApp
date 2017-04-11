import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialComponent } from './components/material/material.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { EditMaterialComponent } from './components/edit-material/edit-material.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAppLsRtb5q3bPR3M2_qllZ7vd6tY-XXwE",
  authDomain: "materialsapp-d28fb.firebaseapp.com",
  databaseURL: "https://materialsapp-d28fb.firebaseio.com",
  storageBucket: "materialsapp-d28fb.appspot.com",
  messagingSenderId: "627238814719"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'materials', component:MaterialsComponent},
  {path: 'material/:id', component:MaterialComponent},
  {path: 'add-material', component:AddMaterialComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaterialsComponent,
    NavbarComponent,
    MaterialComponent,
    AddMaterialComponent,
    EditMaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
