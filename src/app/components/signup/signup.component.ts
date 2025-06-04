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
  user: User = {
    username: '',
    password: '',
    email: '',
    name: '',
    image: '',
    role: ''
  }

  constructor(private fb: FormBuilder, private service: SignupService, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required]
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
