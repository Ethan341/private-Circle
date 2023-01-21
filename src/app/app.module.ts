import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'src/components/table/table.module';
import { DetailsModule } from 'src/components/details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TableModule,
    DetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
