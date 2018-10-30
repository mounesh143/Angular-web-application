import { Component, OnInit } from '@angular/core';
import { EventService } from '../EventServices/event.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-priceing',
  templateUrl: './priceing.component.html',
  styleUrls: ['./priceing.component.css']
})
export class PriceingComponent implements OnInit {

  
  prices = []
  constructor(private _eventsService:EventService) { }

  ngOnInit() {

    // this._eventsService.getPrice().subscribe(
    //   res => this.prices = res,
    //   err => console.log(err)
    // )

    this.prices = [{"name":"The Birds",
    "price":125,
    "poster_image":"poster1.jpg"},
    {"name":"Rear Window","price":125,"poster_image":"poster2.jpg"},
    {"name":"Family Pot","price":125,"poster_image":"poster3.jpg"},
    {"name":"Family Pot","price":125,"poster_image":"poster2.jpg"},
    {"name":"Rear Window","price":125,"poster_image":"poster1.jpg"},
    {"name":"The Birds","price":125,"poster_image":"poster3.jpg"},
    {"name":"Rear Window","price":125,"poster_image":"poster3.jpg"},
    {"name":"The Birds","price":125,"poster_image":"poster2.jpg"},
    {"name":"Family Pot","poster_image":"poster1.jpg"},
    {"name":"The Birds","poster_image":"poster1.jpg"},
    {"name":"The Birds","poster_image":"poster1.jpg"},{"name":"Rear Window","poster_image":"poster2.jpg"},{"name":"Family Pot","poster_image":"poster3.jpg"},{"name":"Family Pot","poster_image":"poster2.jpg"},{"name":"Rear Window","poster_image":"poster1.jpg"},{"name":"The Birds","poster_image":"poster3.jpg"},{"name":"Rear Window","poster_image":"poster3.jpg"},{"name":"The Birds","poster_image":"poster2.jpg"},{"name":"Family Pot","poster_image":"poster1.jpg"},{"name":"The Birds","poster_image":"poster1.jpg"}]
  }
 

}
