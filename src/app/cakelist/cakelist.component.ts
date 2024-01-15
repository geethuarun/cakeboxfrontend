import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  cakes:any
  constructor(private service:StoreService){

  }
  ngOnInit(): void {
    this.service.getCakes().subscribe(data=>this.cakes=data)
  }

}
