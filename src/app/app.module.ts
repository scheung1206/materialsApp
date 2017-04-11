import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialComponent } from './components/material/material.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { EditMaterialComponent } from './components/edit-material/edit-material.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'materials', component:MaterialsComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
