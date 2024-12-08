import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteEmployeeComponent } from './dialogs/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './dialogs/update-employee/update-employee.component';
import { AddEmployeeComponent } from './dialogs/add-employee/add-employee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeChartComponent } from './components/employee-chart/employee-chart.component';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';

@NgModule({
  declarations: [
    EmployeeGridComponent,
    EmployeeChartComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    EmployeeFormComponent,
  ],
  imports: [CommonModule],
})
export class EmployeeModule {}
