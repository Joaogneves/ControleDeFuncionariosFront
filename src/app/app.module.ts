import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { EmployeeComponent } from './components/employee/employee.component';
import { EditComponent } from './components/Employee/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FinishMonthComponent } from './components/finish-month/finish-month.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EditComponent,
    NotFoundComponent,
    FinishMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
