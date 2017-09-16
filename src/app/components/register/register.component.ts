import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators,FormControl} from '@angular/forms';
import { FileValidator} from './register.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form;
fileName = '';


  constructor(private formBuilder: FormBuilder) {
  	this.regForm();
   }

   regForm() {

this.form = this.formBuilder.group({
     salary: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(10),
        this.validatesalary
      ])],
     
      FirstName: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(15),
        this.validateUsername 
      ])],
       LastName: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(15),
        this.validatelastname 
      ])],
       id: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(30),
        this.validateid 
      ])],
       imageInput: [this.fileName, Validators.required]
  }); 
 
  }


  
  ngOnInit() {
  }

  
  validateUsername(controls) {
   
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
   
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validateUsername': true } 
    }
  }
    validatelastname(controls) {
   
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
   
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatelastname': true } 
    }
  }
  validateid(controls) {
   
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
   
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validateid': true } 
    }
}
  validatesalary(controls) {
   
    const regExp = new RegExp(/^[0-9]+$/);
   
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatesalary': true } 
    }
  }

  onRegisterSubmit()
  {
  console.log("form submitted");

}
 
onFileChange($event) {
     let file = $event.target.files[0]; // <--- File Object for future use.
     this.form.controls['imageInput'].setValue($event.target.files[0].name); // <-- Set Value for Validation
}
}
