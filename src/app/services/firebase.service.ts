import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class FirebaseService {

materials: FirebaseListObservable<any[]>;
material: FirebaseObjectObservable<any[]>;
constructor(private af: AngularFire) { }

getMaterials(){
  this.materials = this.af.database.list('/materials') as FirebaseListObservable<Material[]>
  return this.materials;
}

getMaterialDetails(id){
  this.material = this.af.database.object('/materials/'+id) as FirebaseObjectObservable<Material>
  return this.material;
}

getMaterialsByName(name: any): Observable<Material[]> {
    return this.af.database.list('materials')
      .map(_materials => _materials.filter(material => material.name.toLowerCase().indexOf(name) !== -1));

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
