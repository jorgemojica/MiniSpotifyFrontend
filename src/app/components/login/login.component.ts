import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';
  credentials: Login = {
    username: '',
    password: ''
  };

  constructor(private fb: FormBuilder, private service: LoginService, private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.service.login(this.loginForm.value).subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', this.loginForm.value.username);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.errorMessage = 'Invalid username or password!';
          this.deleteErrorMessage();
        }
      )
    }
  }

  deleteErrorMessage(){
    setTimeout(() => {
      this.errorMessage = '';
    }, 4000);
  }

}
