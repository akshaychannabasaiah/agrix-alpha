import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./components/demo/demo.component";
import { DemoDataService } from "./components/demo/demo-data.service";
import { PestMapComponent } from "./components/pestMap/pestMap.component";
import { PestMapDataService } from "./services/pestMap-data.service";
import { FieldDataService } from "./services/field-data.service";
import { FarmerService } from "./services/farmer-data.service";
import { PestService } from "./services/pest.service";
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
import { ConsultantComponent } from "./components/consultant/consultant.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { ClearFieldComponent } from "./components/clearField/clear-field.component";
import { UiSwitchModule } from 'angular2-ui-switch';
import {DropdownModule, CalendarModule} from 'primeng/primeng';
import { RatingModule } from 'ng2-rating';
import { ChartModule } from 'angular2-chartjs';
import { AccountsModule } from 'angular2-meteor-accounts-ui';


const appRoutes: Routes = [
  { path: 'pest/:id/suggestions', component: PestSuggestionsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'pest/:id', component: PestDataComponent, canActivate: ['canActivateForLoggedIn']},
  { path: 'clearfield/:_id', component: ClearFieldComponent, canActivate: ['canActivateForLoggedIn']},
//  { path: 'spotPest', component: SpotPestComponent },  
 // { path: 'pesticide/:id', component: PesticideComponent },
  { path: 'manage', component: ManageFieldComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'docplan', component: DocPlanComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'record', component: RecordActionComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'consultant', component: ConsultantComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'settings', component: SettingsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'publishspotting', component: PestFormComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'pestmap', component: PestMapComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'home', component: HomeComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingComponent },
 /* { path: '',
    redirectTo: '/',
  },*/
  //{ path: '**', component: PageNotFoundComponent }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];

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
    LoginComponent,
    NewsfeedComponent,
    PestDataComponent,
    ClearFieldComponent,
    PestFormComponent,
    ConsultantComponent,
    SettingsComponent,
    DocPlanComponent,
    PestSuggestionsComponent,
    RecordActionComponent,
    ManageFieldComponent,
 /*   
    PesticideComponent,  
    SpotPestComponent
*/  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService,
    PestMapDataService,
    FieldDataService,
    FarmerService,
    PestService,
    ROUTES_PROVIDERS
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    CalendarModule,
    RatingModule,
    ChartModule,
    DropdownModule,
    ReactiveFormsModule,
    AccountsModule,    
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
