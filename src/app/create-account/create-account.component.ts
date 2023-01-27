import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit{
  account :Account = new Account();
  submitted=false;

  constructor(private accoutService: AccountService, private router:Router){}
  ngOnInit(): void {

  }
  newAccount():void {
    this.submitted=false;
    this.account = new Account();
  }

  save() {
    console.log(this.account);
    this.accoutService.createAccount(this.account)
      .subscribe(data=> {
        console.log(data)
        this.account = new Account();
        this.gotoList();
      },error=>console.log(error));

  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/accounts']);
  }
}
