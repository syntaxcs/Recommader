import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    BodyModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
