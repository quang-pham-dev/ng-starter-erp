import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './components/success/success.component';
import { ErrorsComponent } from './components/errors/errors.component';



@NgModule({
  declarations: [
    SuccessComponent,
    ErrorsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationModule { }
