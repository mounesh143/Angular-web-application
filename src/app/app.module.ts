import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule,RequiredValidator } from '@angular/forms';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import 'hammerjs';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule,MatCheckboxModule,MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatTab, MatTabsModule} from '@angular/material';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecailEventsComponent } from './specail-events/specail-events.component';
import { AuthService } from './auth/auth.service';
import { EventService} from './EventServices/event.service';
import { AuthGuard} from './auth.guard';
import { TokenInterceptorService} from './token-interceptor.service';
import { PriceingComponent } from './priceing/priceing.component';
import { ContactComponent } from './contact/contact.component';
import { SearchPipe } from './Filter/search.pipe';
import { AutocompleteOverviewExampleComponent } from './autocomplete-overview-example/autocomplete-overview-example.component';

const routes: Routes =[
  {
    path: '',
    redirectTo:'/events',
    pathMatch : 'full'


  },

  {
    path:'events',
    component : EventsComponent
  },
  {
    path:'specail',
    component : SpecailEventsComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'priceing',
    component : PriceingComponent
  },
  {
    path:'contact',
    component : ContactComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'register',
    component : RegisterComponent
  },


];

@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecailEventsComponent,
    PriceingComponent,
    ContactComponent,
    SearchPipe,
    AutocompleteOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    
    

   
    
   

  ],
  providers: [RouterModule,AuthService,EventService,AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
