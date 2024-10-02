import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
    CommonModule
  ],
  exports: [
    MainPageComponent,
    ListComponent
  ]
})
export class DbzModule { }
