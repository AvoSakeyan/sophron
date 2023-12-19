import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
    ) {
    this.cityForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.cityForm.valid) {
      const inputValue = this.cityForm.value.name;
      localStorage.setItem('city', inputValue)
      this.router.navigate(['/dashboard'])
    } else {
      // Handle invalid form
      console.log('Form is invalid. Please fill in the required fields.');
    }
  }

}
