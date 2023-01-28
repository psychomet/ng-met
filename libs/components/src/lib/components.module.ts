import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SlideToggleComponent} from "./slide-toggle/slide-toggle.component";

@NgModule({
  declarations: [SlideToggleComponent ],
  imports: [CommonModule,  BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule],
})
export class ComponentsModule {}
