import { Component, OnInit } from '@angular/core';
import { EventService } from '../EventServices/event.service';

@Component({
  selector: 'app-specail-events',
  templateUrl: './specail-events.component.html',
  styleUrls: ['./specail-events.component.css'],
  providers: [ EventService ]
})
export class SpecailEventsComponent implements OnInit {

  specials = []
  constructor(private _eventsService:EventService) { }

  ngOnInit() {

    this._eventsService.getSpectialEvent().subscribe(
      res => this.specials = res,
      err => console.log(err)
    )
  }

}
