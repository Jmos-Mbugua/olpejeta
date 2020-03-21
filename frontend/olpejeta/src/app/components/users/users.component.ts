import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/user.model';

import { Sighting } from '../../post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users:User [];

  constructor(private dataservice: DataService
    ) {}

  ngOnInit(){ 
    return this.dataservice.getUsers()
      .subscribe(data => this.users = data)
  }
}
