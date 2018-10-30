import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3037/api/events/";
  private _specialEventUrl = "http://localhost:3037/api/special/";
  private _priceUrl = "http://localhost:3037/api/price/";

  constructor(private http:HttpClient) { }

  getEvents()
{
  return this.http.get<any>(this._eventsUrl)
}

getSpectialEvent()
{
  return this.http.get<any>(this._specialEventUrl)
}

getPrice()
{
  return this.http.get<any>(this._priceUrl)
}

}

