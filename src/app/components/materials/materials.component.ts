import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  materials:any;
  search:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getMaterials().subscribe(materials => {
      //console.log(materials);
      this.materials = materials;
    });
  }
  searchMaterials(){
    this.firebaseService.getMaterialsByName(this.search.toLowerCase()).subscribe(materials => {
      this.materials = materials;
    });
  }

}
