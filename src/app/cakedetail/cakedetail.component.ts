import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent {
  id:any
  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);
    

  }

}
