import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHourComponent } from './edit-hour.component';

const routes: Routes = [{ path: '', component: EditHourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditHourRoutingModule { }
