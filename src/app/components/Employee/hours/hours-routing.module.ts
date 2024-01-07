import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoursComponent } from './hours.component';

const routes: Routes = [{ path: '', component: HoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoursRoutingModule { }
