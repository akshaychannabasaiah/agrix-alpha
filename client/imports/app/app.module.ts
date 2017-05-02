import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { DemoDataService } from "./demo/demo-data.service";
import { PestMapComponent } from "./pestMap/pestMap.component";
import { PestMapDataService } from "./pestMap/pestMap-data.service";
import { FormsModule,  
  ReactiveFormsModule  
} from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
//import { MapKey } from "../../../keys/keys";
 
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DemoComponent,
    PestMapComponent
  ],
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
      apiKey: webpack.constants.GoogleMapsKey
    })
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
