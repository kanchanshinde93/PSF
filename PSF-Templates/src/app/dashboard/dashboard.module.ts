import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
//import { AuthGuard } from '../guards/auth.guard';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  
  {
    path: 'addVisitor', 
    component: AddVisitorComponent
  },

  {
    path: 'visitorList',
    component: VisitorListComponent
  } 
];

@NgModule({
  declarations: [
    VisitorListComponent,
    AddVisitorComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
