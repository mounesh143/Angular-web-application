import { Component, OnInit } from '@angular/core';
import { EventService } from '../EventServices/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [ EventService ],
})
export class EventsComponent implements OnInit {

  prices = []
  constructor(private _eventsService:EventService) { }

  ngOnInit() {

    this._eventsService.getPrice().subscribe(
      res => this.prices = res,
      err => console.log(err)
    )

    
  }

}
