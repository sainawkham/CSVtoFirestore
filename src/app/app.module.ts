import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DropzoneDirective } from './dropzone.directive';
import { UseruploadComponent } from './userupload/userupload.component';
import { Services/csv2fireService } from './services/csv2fire.service';

@NgModule({
  imports:      [ AngularFireModule.initializeApp(environment.firebaseConfig),
                  AngularFirestoreModule,
                  BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DropzoneDirective, UseruploadComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Services/csv2fireService]
})
export class AppModule { }
