import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.contactUsForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactUsForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactUsForm.value));


  }
}
