import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandService } from 'src/app/admin/commands/services/command.service';

@Component({
  selector: 'app-command-add',
  templateUrl: './command-add.component.html',
  styleUrls: ['./command-add.component.scss']
})
export class CommandAddComponent implements OnInit {

  object: any = {}
  att = [];
  groups = []
  submitted = false;
  myform: FormGroup;
  userData;

  types = [{ id: 1, value: 'Engine On' }, { id: 0, value: 'Arm Alarm' },{ id: 2, value: 'TimeZone' }];
  nameTypes = [{ id: 1, value: 'TimeZone' }, { id: 2, value: 'Speed Limit' }, { id: 3, value: 'odometer' }];
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private commandService: CommandService) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      description: ['', [Validators.required]],
      sms: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  openSnackBar(): void {
    this.snackBar.open('Successfully added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  addCommand() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.created_by = this.userData.id;
    console.log(this.myform.value);
    this.commandService.addCommand(this.myform.value).subscribe(res => {
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/commands/list']);
    },
    err=>{
      console.log(err)
    }
    )
  }


}
