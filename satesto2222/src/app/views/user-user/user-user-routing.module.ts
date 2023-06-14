import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User',
    },
    children: [
      {
        path: '',
        component: AboutComponent,
        data: {
          title: 'about user',
        },
      },
      {
        path: 'add',
        component: AddUserComponent,
        data: {
          title: 'add user',
        },
      },
      {
        path: 'update',
        component: UpdateUserComponent,
        data: {
          title: 'update user',
        },
      },
      {
        path: 'delete',
        component: DeleteUserComponent,
        data: {
          title: 'delete user',
        },
      }      
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUserRoutingModule { }
