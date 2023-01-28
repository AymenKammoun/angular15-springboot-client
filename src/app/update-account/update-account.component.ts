import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  id !: number;
  account!: Account;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.account = new Account();
    this.id = this.route.snapshot.params['id'];
    this.accountService.getAccount(this.id)
      .subscribe(data => {
        console.log(data)
        this.account = data;
      }, error => console.log(error));
  }

  updateAccount() {
    this.accountService.updateAccount(this.id, this.account)
      .subscribe(data => console.log(data), error => console.log(error));
    this.account = new Account();
    this.gotoList();
  }

  onSubmit() {
    this.updateAccount();
  }

  gotoList() {
    this.router.navigate(['/accounts']);
  }

}
