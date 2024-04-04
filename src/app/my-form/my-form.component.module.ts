import { MyFormComponent } from './my-form.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyFormComponent],
  imports: [IonicModule, ReactiveFormsModule],
  exports: [MyFormComponent]
})
export class MyFormModule {}