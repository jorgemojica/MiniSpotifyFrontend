import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userForm: FormGroup;
  userName: string = '';
  userId: number = 0;
  userImage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.fb.group({
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      email: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userName = localStorage.getItem('username') ?? '';
    this.userService.getUserByUsername(this.userName).subscribe(
      (response) => {
        this.userId = response.id ?? 0;
        this.userImage = response.image;
        this.userForm.patchValue({
          image: response.image,
          username: response.username,
          email: response.email,
          name: response.name,
          role: response.role == "ROLE_ADMIN" ? "Admin" : "User"
        })
      },
      (error) => {
        console.log('An error has ocurred while getting the user info: ', error);
      }
    )
  }

  onSubmit() {
    if(this.userForm.invalid){
      return;
    }
    const updatedUser: User = {
      email: this.userForm.value.email,
      name: this.userForm.value.name,
      image: this.userForm.value.image
    }
    this.userService.updateUser(this.userId, updatedUser).subscribe(
      (response) => {
        console.log('updated user: ', response);
        // this.router.navigate(['/profile']);
        location.reload();
      },
      (error) => {
        console.log('updated user: ', error);
      }
    )
  }

}
