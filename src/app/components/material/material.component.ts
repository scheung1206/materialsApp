import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  id:any;
  material:any;
  //imageUrl:any;
  constructor(private firebaseService: FirebaseService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getMaterialDetails(this.id).subscribe(material => {
      this.material = material;
      //console.log(material);
      // @TODO - Storage Ref
    });
  }

}
