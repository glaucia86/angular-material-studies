import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { EmployeeService } from 'src/app/shared/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetEmployeeForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  employeeForm: FormGroup;

  ngOnInit(): void {
    this.updateForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe((data) => {
      console.log(data.subjects);
      this.employeeForm = this.fb.group({
        firstName: [data.firstName, [Validators.required]],
        lastName: [data.lastName, [Validators.required]],
        email: [data.email, [Validators.required]],
        phone: [data.phone, [Validators.required, Validators.pattern('^[0-9]+$')]],
      });
    });
  }

  updateForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName);
  };

  updateEmployeeForm() {
    console.log(this.employeeForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.employeeService.updateEmployee(id, this.employeeForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/list-employees'));
      });
    }
  }

}
