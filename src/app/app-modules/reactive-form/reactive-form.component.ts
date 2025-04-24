import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  showForm = false;
  myForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    this.myForm = this.fb.group({});
  }
  addControlsInput(): FormGroup{
    return this.fb.group({
      firstInput: new FormControl('', Validators.required),
      secondInput: new FormControl('', Validators.required),
      textArea: new FormControl('')
    });
  }
  get dynamicControls() {
    return this.myForm.controls["dynamicControls"] as FormArray;
  }
  addButton(){
    this.showForm = true;
    const dynamicControls = this.myForm.get('dynamicControls') as FormArray;
    if(dynamicControls == null) {
      this.myForm.addControl('dynamicControls', this.fb.array([this.addControlsInput()]));
    } else {
      dynamicControls.push(this.addControlsInput());
    }
    
  }

  deleteButton(index: number){
    const itemsList = this.myForm.get('dynamicControls') as FormArray;
    itemsList.removeAt(index);

  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
