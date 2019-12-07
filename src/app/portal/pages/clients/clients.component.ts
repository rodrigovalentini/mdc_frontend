import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  users = [];
  loading = true;
  constructor(
    private portalService: PortalService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.portalService.getUsers()
      .subscribe(users => {
        if (users) {
          this.users = users.data;
          this.loading = false;
          console.log(this.users);
        }
      });
  }

}
