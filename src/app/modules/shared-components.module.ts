import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [FormsModule, CommonModule, MatIconModule],
  declarations: [
    ButtonComponent,
  ],
  exports: [ButtonComponent, MatIcon],
  providers: []
})
export class SharedComponentsModule { }