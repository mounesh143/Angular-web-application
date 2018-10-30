import { Component, OnInit, ValueProvider } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform = [];

  ngOnInit() {
  }

  onSubmit(value :any){
    console.log(value);
  }
}
