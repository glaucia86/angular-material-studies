import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-employee' },
  { path: 'add-employee', component: AddEmployeeComponent }
  { path: 'edit-employee', component: EditEmployeeComponent }
  { path: 'list-employees', component: ListEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
