import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  //obrazec = new FormControl('');

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      'Title': [null, Validators.required],
      'Reviewer': [null, Validators.required],
      'Technology': [null, Validators.required],
      'Reward': [null, Validators.required],
      'Deadline': [null, Validators.required],
      'Description': [null, Validators.required],
    });
    
  }

  ngOnInit() {
  }

  test(){
    console.log(this.formGroup.value)
  }

}

