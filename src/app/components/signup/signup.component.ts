import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SignupService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user: User = this.signupForm.value;
      this.service.createUser(user).subscribe(
        (response) => {
          console.log('User saved! ', user);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log('An error ocurred while saving the user! ', error);
        }
      )
    }
  }

}
