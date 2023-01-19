import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!:string;
  onSubmit: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit():void {
  }

  loginForm(form: NgForm) {
    this.authService.login(this.username).subscribe((res)=>{
      this.router.navigate(['/homeRouting'])
    })
  }
}
