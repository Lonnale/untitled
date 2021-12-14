import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrainingComponent} from './training/training.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CalculatorComponent} from './calculator/calculator.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {SliderComponent} from './slider/slider.component';
import {MatSliderChange, MatSliderModule} from '@angular/material/slider';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from '@angular/material/expansion';
import {CinemaComponent} from "./cinema/cinema.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
//import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {PipeNamePipe} from './pipes/pipe-name.pipe';
import {TemplateformComponent} from './templateform/templateform.component';
import {TenttisliderComponent} from './tenttislider/tenttislider.component';
//import {PipePipe} from './pipe.pipe';
//import {AngularFireAuthModule} from "@angular/fire/compat/auth";
//import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    CalculatorComponent,
    SliderComponent,
    ToolbarComponent,
    ReactiveformComponent,
    CinemaComponent,
    LoginComponent,
    MaintenanceComponent,
    PipeNamePipe,
    TemplateformComponent,
    TenttisliderComponent,
    // PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,

    //AngularFireModule.initializeApp(environment.firebase, 'angular-auth.firebase'),
    //AngularFireAuthModule,
    //AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
