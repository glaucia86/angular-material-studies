import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html'
})
export class ListEmployeesComponent implements OnInit {
  EmployeeData: any = [];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'action',
  ];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe((data) => {
      this.EmployeeData = data;
      this.dataSource = new MatTableDataSource<Employee>(this.EmployeeData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit(): void { }

  deleteEmployee(index: number, e: { _id: string; }) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.employeeService.deleteEmployee(e._id).subscribe();
    }
  }

}
