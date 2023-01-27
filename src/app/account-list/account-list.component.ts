import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import​ { AccountService } ​from​​"../account.service"​;
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit{

  accounts!: Observable<Account[]>;

  constructor(private accountService:AccountService, private router: Router){ }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getAccountsList();
  }

  deleteAccount(id : number){
    this.accountService.deleteAccount(id).subscribe(data=>{
      console.log(data);
      this.reloadData();
    })
  }

  accountDetails(id:number){
    this.router.navigate(['details',id]);
  }

}
