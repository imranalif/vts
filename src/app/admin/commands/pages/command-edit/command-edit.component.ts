import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommandService } from 'src/app/admin/commands/services/command.service';

@Component({
  selector: 'app-command-edit',
  templateUrl: './command-edit.component.html',
  styleUrls: ['./command-edit.component.scss']
})
export class CommandEditComponent implements OnInit {
  Id: string;
  createdBy
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
    private commandService: CommandService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      description: ['', [Validators.required]],
      sms: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('id');
      this.edit(this.Id);
    });
  }

  edit(id): void {
    this.commandService.getCommandById(id).subscribe(data => {
      this.setData(data);
    });
  }

  setData(data): void {
    this.myform.patchValue({
      type: data.type,
      description: data.description,
      sms: data.textchannel
    });
    this.createdBy = data.created_by;
  }

  openSnackBar(): void {
    this.snackBar.open('Updated added!!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  goBack(){
    this.router.navigate(['/admin/traccar/commands/list']);
  }


  updateCommand() {
    this.myform.markAllAsTouched();
    this.submitted = true;
    if (this.myform.invalid) {
      return;
    }
    
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.myform.value.updated_by = this.userData.id;
    this.myform.value.created_by = this.createdBy;
    this.myform.value.updated_time = new Date();
    console.log(this.myform.value)
    this.commandService.updateCommand(this.Id,this.myform.value).subscribe(res=>{
      this.openSnackBar();
      this.router.navigate(['/admin/traccar/commands/list']);
    })
  }


}
