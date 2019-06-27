import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgExampleLibModule } from 'ng-example-lib';

import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgExampleLibModule,
  ]
})
export class UserModule { }
