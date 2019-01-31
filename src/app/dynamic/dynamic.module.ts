import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '@app/shared';

//
@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SharedModule]
})
export class DynamicModule {}
// DynamicModule
