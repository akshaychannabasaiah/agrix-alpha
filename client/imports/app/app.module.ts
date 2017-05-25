import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./components/demo/demo.component";
import { DemoDataService } from "./components/demo/demo-data.service";
import { PestMapComponent } from "./components/pestMap/pestMap.component";
import { PestMapDataService } from "./services/pestMap-data.service";
import { FormsModule,  
  ReactiveFormsModule  
} from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapKey } from "../../../keys/keys";
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from "./components/topBar/top-bar.component";
import { BottomBarComponent } from "./components/bottomBar/bottom-bar.component";
import { PestSuggestionsComponent } from "./components/pestSuggestions/pest-suggestions.component";
import { PestDataComponent } from "./components/pestData/pest-data.component";
import { SpotPestComponent } from "./components/spotPest/spot-pest.component";
import { ManageFieldComponent } from "./components/manageMyField/manage-my-field.component";
import { PestFormComponent } from "./components/pestForm/pest-form.component";
import { PesticideComponent } from "./components/pesticide/pesticide.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { DocPlanComponent } from "./components/docPlan/doc-plan.component";
import { RecordActionComponent } from "./components/recordAction/record-action.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsfeedComponent } from "./components/newsfeed/newsfeed.component";
import { LandingComponent } from "./components/landing/landing.component";
import { SignupComponent } from "./components/signup/signup.component";
import { UiSwitchModule } from 'angular2-ui-switch';
import {DropdownModule, CalendarModule} from 'primeng/primeng';
import { RatingModule } from 'ng2-rating';

const appRoutes: Routes = [
  { path: 'pest/:id/suggestions', component: PestSuggestionsComponent },
  { path: 'pest/:id', component: PestDataComponent },
//  { path: 'spotPest', component: SpotPestComponent },
//  
 // { path: 'pesticide/:id', component: PesticideComponent },
 // { path: 'manage', component: ManageFieldComponent },
  { path: 'docplan', component: DocPlanComponent },
 // { path: 'record', component: RecordActionComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'publishspotting', component: PestFormComponent },
  { path: 'pestmap', component: PestMapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: LandingComponent },
 /* { path: '',
    redirectTo: '/',
  },*/
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
    PestMapComponent,
    TopBarComponent,
    HomeComponent,
    BottomBarComponent,
    LandingComponent,
    SignupComponent,
    NewsfeedComponent,
    PestDataComponent,
    PestFormComponent,
    SettingsComponent,
    DocPlanComponent,
    PestSuggestionsComponent,
 /*   ManageFieldComponent,
    PesticideComponent,  
    
    RecordActionComponent,
    SpotPestComponent
*/  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService,
    PestMapDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    CalendarModule,
    RatingModule,
    DropdownModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: MapKey
    }),
    RouterModule.forRoot(appRoutes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})




export class AppModule {
  constructor() {

  }
}
