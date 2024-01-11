import { NgModule } from '@angular/core';
import { CrushComponent } from './crush/crush.component';
import { ShareModule } from '../../share.module';

@NgModule({
  declarations: [
    CrushComponent
  ],
  imports: [
    ShareModule
  ]
})
export class InfoModule { }
