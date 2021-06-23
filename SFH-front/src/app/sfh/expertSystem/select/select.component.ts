import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  roleint = localStorage.getItem('role')
  rolestring
  ngOnInit(): void {
    if(this.roleint=="0"){
      this.rolestring = "admin"
    }else if(this.roleint=="1"){
      this.rolestring = "owner"
    }else if(this.roleint=="2"){
      this.rolestring = "director"
    }else if(this.roleint=="3"){
      this.rolestring = "manager"
    }
  }

}
