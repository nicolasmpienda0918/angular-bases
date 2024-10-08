import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page-companent';
import { ListComponent } from './components/list/list.component';
import { AddCaharacterComponent } from './components/add-caharacter/add-caharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCaharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    MainPageComponent,
    ListComponent
  ]
})
export class DbzModule { }
