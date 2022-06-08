import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StepFourComponent } from './components/step-four/step-four.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepTwoComponent } from './components/step-two/step-two.component';


import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const COMPONENTS: any[] = [
  StepOneComponent,
  StepTwoComponent,
  StepThreeComponent,
  StepFourComponent
]

const MODULES: any[] = [
  StepsModule,
  ButtonModule,
  FileUploadModule,
  MessagesModule,
  ImageModule,
  InputNumberModule,
  CalendarModule,
  DropdownModule,
  InputTextModule,
  TableModule
]


@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
