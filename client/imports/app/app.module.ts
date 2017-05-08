import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./components/demo/demo.component";
import { DemoDataService } from "./components/demo/demo-data.service";
import { PestMapComponent } from "./components/pestMap/pestMap.component";
import { PestMapDataService } from "./components/pestMap/pestMap-data.service";
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
import { DocPlanComponent } from "./components/docPlan/doc-plan.component";
import { RecordActionComponent } from "./components/recordAction/record-action.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsfeedComponent } from "./components/newsfeed/newsfeed.component";



const appRoutes: Routes = [
 // { path: 'pest/:id/suggestions', component: PestSuggestionsComponent },
 // { path: 'pest/:id', component: PestDataComponent },
//  { path: 'spotPest', component: SpotPestComponent },
//  { path: 'spotPest/pestForm', component: PestFormComponent },
 // { path: 'pesticide/:id', component: PesticideComponent },
 // { path: 'manage', component: ManageFieldComponent },
 // { path: 'plan', component: DocPlanComponent },
 // { path: 'record', component: RecordActionComponent },
  { path: 'pestmap', component: PestMapComponent },
  { path: '', component: HomeComponent },
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
/*    BottomBarComponent,
    ManageFieldComponent,
    PestDataComponent,
    PestFormComponent,
    PesticideComponent,
    PestSuggestionsComponent,
    DocPlanComponent,
    NewsfeedComponent,
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
