import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {

materials: FirebaseListObservable<any[]>;
constructor(private af: AngularFire) { }

getMaterials(){
  this.materials = this.af.database.list('/materials') as FirebaseListObservable<Material[]>
  return this.materials;
}

}

interface Material{
  $key?:string;

  $name?:string;
  $description?:string;
  
  $title?:string;
  $type?:string;
  $image?:string;
  $city?:string;
  $owner?:string;
  $bedrooms?:string;
}
