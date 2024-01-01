import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'gd-contact-layout',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-layout.component.html',
  styleUrl: './contact-layout.component.scss'
})
export class ContactLayoutComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  public ngOnInit(): void {
    this._initializeContactForm();
  }

  private _initializeContactForm(): void {
    this.contactForm = this._fb.group({
      name: this._fb.control<string>("", { nonNullable: true, validators: [Validators.required] }),
      email: this._fb.control<string>("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
      subject: this._fb.control<string>("", { nonNullable: true, validators: [Validators.required] }),
      message: this._fb.control<string>("", { nonNullable: true, validators: [Validators.required] }),
    });
  }
}
