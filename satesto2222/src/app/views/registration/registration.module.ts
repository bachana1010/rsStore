import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

// CoreUI Modules
import { CardModule, GridModule, ButtonModule, ListGroupModule, FormModule } from '@coreui/angular';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    ListGroupModule,
    FormModule
  ]
})
export class RegistrationModule { }
